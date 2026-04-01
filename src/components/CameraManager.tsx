import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import * as THREE from 'three'
import { calculateFraming } from '../utils/cameraUtils'

export interface CameraManagerHandle {
    snapToCentroid: (centroidY: number, viewAngle?: 'flat' | 'isometric', instant?: boolean) => void;
    takeScreenshot: (metadata: {
        year: number | string,
        height: string,
        comparison: string,
        totalPhysicsHeight: number,
        viewAngle: 'flat' | 'isometric',
        username: string
    }) => Promise<Blob>;
}

export const CameraManager = forwardRef<CameraManagerHandle, { target: [number, number, number] }>(({ target }, ref) => {
    const { camera, gl, scene } = useThree()
    const controlsRef = useRef<any>(null)
    const animatingRef = useRef(false)
    const targetState = useRef({
        position: new THREE.Vector3(),
        lookAt: new THREE.Vector3(),
        zoom: 1,
        timeElapsed: 0
    })

    useFrame((state, delta) => {
        if (animatingRef.current && controlsRef.current) {
            const { position, lookAt, zoom } = targetState.current;
            const cam = state.camera as THREE.OrthographicCamera;

            // Handle potential large delta times nicely
            const d = Math.min(delta, 0.1);
            const lerpFactor = 6.0 * d;

            targetState.current.timeElapsed += d;

            controlsRef.current.target.lerp(lookAt, lerpFactor);
            cam.position.lerp(position, lerpFactor);
            cam.zoom += (zoom - cam.zoom) * lerpFactor;
            cam.updateProjectionMatrix();

            // We only call update if strictly needed, or just let OrbitControls handle it naturally afterwards
            controlsRef.current.update();

            // Timeboxed animation: gently exit after 0.8 seconds without viciously snapping
            if (targetState.current.timeElapsed > 0.8) {
                animatingRef.current = false;
            }
        }
    })

    useImperativeHandle(ref, () => ({
        snapToCentroid: (totalHeight: number, viewAngle: 'flat' | 'isometric' = 'isometric', instant: boolean = false) => {
            if (controlsRef.current) {
                const { position, target: newTarget, zoom: optimalZoom } = calculateFraming(totalHeight, viewAngle, window.innerHeight, window.innerHeight > 900 ? 200 : 150);

                if (instant) {
                    controlsRef.current.target.copy(newTarget);
                    camera.position.copy(position);
                    camera.lookAt(newTarget);

                    if ((camera as THREE.OrthographicCamera).isOrthographicCamera) {
                        const orthoCam = camera as THREE.OrthographicCamera;
                        orthoCam.zoom = optimalZoom;
                        orthoCam.updateProjectionMatrix();
                    }
                    controlsRef.current.update();
                    animatingRef.current = false;
                } else {
                    targetState.current = {
                        position: position,
                        lookAt: newTarget,
                        zoom: optimalZoom,
                        timeElapsed: 0
                    };
                    animatingRef.current = true;
                }
            }
        },
        takeScreenshot: async (metadata) => {
            // 0. Save current camera state to restore later
            const originalPosition = camera.position.clone();
            const orthoCamera = camera as THREE.OrthographicCamera;
            const originalZoom = orthoCamera.zoom;
            const originalLeft = orthoCamera.left;
            const originalRight = orthoCamera.right;
            const originalTop = orthoCamera.top;
            const originalBottom = orthoCamera.bottom;
            const originalTarget = controlsRef.current.target.clone();

            // 1. Recalculate optimal framing for a 1920px height to ensure consistency
            // with mobile zoom levels, regardless of current desktop window size.
            const screenshotHeight = 1920;
            const framing = calculateFraming(
                metadata.totalPhysicsHeight,
                metadata.viewAngle,
                screenshotHeight,
                300 // Re-tuned for a balance of detail and breathing room
            );

            if (orthoCamera.isOrthographicCamera) {
                // Apply recalculated target and zoom
                // Shift the focus upward by 5% visible height just for screenshots to push stack DOWN
                const visibleHeight = 1920 / framing.zoom;
                const screenshotVerticalShift = visibleHeight * 0.05;

                controlsRef.current.target.copy(framing.target);
                controlsRef.current.target.y += screenshotVerticalShift;

                camera.position.copy(framing.position);
                camera.position.y += screenshotVerticalShift;
                
                // Standardize the frustum for the 1080:1920 coordinate system.
                // This ensures pixel-perfect consistency with the framing utility's assumptions.
                orthoCamera.top = 960;
                orthoCamera.bottom = -960;
                orthoCamera.left = -540;
                orthoCamera.right = 540;
                orthoCamera.zoom = framing.zoom;

                camera.updateProjectionMatrix();
                controlsRef.current.update();
            }

            // Render the scene at the current resolution (canvas will stretch it better than it being tiny)
            gl.render(scene, camera)

            // 2. Create the target 1080x1920 Instagram Story canvas natively
            const outCanvas = document.createElement('canvas')
            outCanvas.width = 1080
            outCanvas.height = 1920
            const ctx = outCanvas.getContext('2d')
            if (!ctx) throw new Error('Could not get canvas context');

            // Pre-fill the background color natively so side-letterboxing is seamless and invisible
            let bgColor = '#4F46E5';
            if (scene.background && (scene.background as any).getHexString) {
                bgColor = '#' + (scene.background as any).getHexString();
            }
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 1080, 1920);

            // 3. Draw the 3D scene (aspect ratio is already built into the projection!)
            ctx.drawImage(gl.domElement, 0, 0, gl.domElement.width, gl.domElement.height, 0, 0, 1080, 1920);

            // Restore camera
            camera.position.copy(originalPosition);
            if (orthoCamera.isOrthographicCamera) {
                orthoCamera.zoom = originalZoom;
                orthoCamera.left = originalLeft;
                orthoCamera.right = originalRight;
                orthoCamera.top = originalTop;
                orthoCamera.bottom = originalBottom;
                camera.updateProjectionMatrix();
            }
            controlsRef.current.target.copy(originalTarget);
            controlsRef.current.update();

            // 4. Replicate the TopOverlay DOM component 1:1 using physical screen coordinate transformations
            const boxWidth = 993; // Accurately matches 92% scaled spacing bounds
            const boxHeight = 240; // Scales roughly with py-3 px-5
            const boxX = (1080 - boxWidth) / 2;
            const boxY = 80; // Scaled offset for top-5 margin
            const cornerRadius = 64; // Accurately matches rounded-[24px]

            // Glassmorphic backdrop precisely mirrored
            ctx.beginPath()
            ctx.roundRect(boxX, boxY, boxWidth, boxHeight, cornerRadius)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)' // Match bg-white/85 class
            ctx.fill()

            // Shadow matched to [0_10px_40px_rgba(0,0,0,0.08)]
            ctx.shadowColor = 'rgba(0, 0, 0, 0.08)'
            ctx.shadowBlur = 108
            ctx.shadowOffsetY = 27
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)' // Match border-white/50
            ctx.lineWidth = 3
            ctx.stroke()

            // Disengage shadow to prevent artifacting all following fonts!
            ctx.shadowBlur = 0
            ctx.shadowOffsetY = 0
            ctx.shadowColor = 'transparent'

            // Accurate DOM font hierarchy translation
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            const centerX = 1080 / 2;

            // Header -> uppercase tracking-widest text-[#6B7280]
            ctx.fillStyle = '#6B7280'
            ctx.font = 'normal 36px "Inter", system-ui, sans-serif'
            const displayUsername = metadata.username || 'jdlennoxs';
            const yearText = metadata.year === 0
                ? `${displayUsername.toUpperCase()} READ`
                : `IN ${metadata.year} ${displayUsername.toUpperCase()} READ`
                ; (ctx as any).letterSpacing = '5px';
            ctx.fillText(yearText, centerX, boxY + 60);
            ; (ctx as any).letterSpacing = '0px';

            // Central Text -> font-semibold text-[#111827]
            ctx.fillStyle = '#111827'
            ctx.font = '600 64px "Inter", system-ui, sans-serif'
            ctx.fillText(metadata.height.replace('m', ' metres'), centerX, boxY + 120);

            // Footer Text -> inline semantic dual-color formatting
            ctx.font = 'normal 36px "Inter", system-ui, sans-serif'
            const part1 = "That's the same as... ";
            const part2 = metadata.comparison;
            const w1 = ctx.measureText(part1).width;
            const w2 = ctx.measureText(part2).width;
            const startPosX = centerX - ((w1 + w2) / 2);

            ctx.textAlign = 'left';
            ctx.fillStyle = '#6B7280';
            ctx.fillText(part1, startPosX, boxY + 180);
            ctx.fillStyle = '#4B5563';
            ctx.fillText(part2, startPosX + w1, boxY + 180);

            // 5. Add watermark at the bottom
            ctx.font = '500 28px "Inter", system-ui, sans-serif';
            const watermarkText = 'bookstack.jdlennoxs.com';
            const watermarkWidth = ctx.measureText(watermarkText).width;
            const padX = 28;
            const padY = 16;
            const pillWidth = watermarkWidth + padX * 2;
            const pillHeight = 28 + padY * 2;
            const pillX = centerX - pillWidth / 2;
            const pillY = 1920 - 80 - pillHeight;

            ctx.beginPath();
            ctx.roundRect(pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fill();

            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(watermarkText, centerX, pillY + pillHeight / 2 + 2); // optical center

            return new Promise<Blob>((resolve, reject) => {
                outCanvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                    else reject(new Error('Canvas toBlob failed'));
                }, 'image/png');
            });
        }
    }))

    return (
        <OrbitControls
            ref={controlsRef}
            target={target}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={3}
            maxDistance={100}
            minZoom={50}
            maxZoom={10000}
            onStart={() => {
                // If user touches the camera manually, instantly abdicate control 
                // to prevent vicious scroll feedback loop overrides
                animatingRef.current = false;
            }}
        />
    )
})
