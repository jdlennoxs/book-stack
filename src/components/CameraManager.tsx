import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import * as THREE from 'three'

export interface CameraManagerHandle {
    snapToCentroid: (centroidY: number) => void;
    takeScreenshot: (metadata: { year: number | string, height: string, comparison: string }) => Promise<string>;
}

export const CameraManager = forwardRef<CameraManagerHandle, { target: [number, number, number] }>(({ target }, ref) => {
    const { camera, gl, scene } = useThree()
    const controlsRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
        snapToCentroid: (totalHeight: number) => {
            if (controlsRef.current) {
                // Triangulated from user data - refining for height > 0.7m
                // Target Y needs to move up slightly to push books lower
                const targetY = 4.2 * totalHeight - 0.2 // Slightly higher targetY pushes books down

                // Distance needs to pull back more for taller stacks
                const distance = 9.2 * totalHeight + 4.0 // Pulled back slightly more

                // Flatten the angle by reducing the Y component (0.25 -> 0.18)
                const direction = new THREE.Vector3(0.25, 0.08, 0.86).normalize()
                // Adjust target X to horizontally center the stack AND the person (-1.2 and 0)
                const newTarget = new THREE.Vector3(-0.6, targetY, -0.2)

                controlsRef.current.target.copy(newTarget)
                const offset = direction.clone().multiplyScalar(distance)
                camera.position.copy(newTarget.clone().add(offset))
                camera.lookAt(newTarget)

                // Update controls
                controlsRef.current.update()
            }
        },
        takeScreenshot: async (metadata) => {
            // 1. Render the scene
            gl.render(scene, camera)

            // 2. Create the output canvas (Forcing 9:16 aspect ratio)
            const outH = gl.domElement.height
            const outW = Math.floor(outH * (9 / 16))
            const outCanvas = document.createElement('canvas')
            outCanvas.width = outW
            outCanvas.height = outH
            const ctx = outCanvas.getContext('2d')
            if (!ctx) return ''

            // 3. Draw the 3D scene (cropped to cental 9:16 area)
            const sourceW = gl.domElement.width
            const sourceH = gl.domElement.height
            const cropW = Math.min(sourceW, sourceH * (9 / 16))
            const cropH = sourceH
            const startX = (sourceW - cropW) / 2
            const startY = 0

            ctx.drawImage(gl.domElement, startX, startY, cropW, cropH, 0, 0, outW, outH)

            // 4. Draw Overlay at the TOP
            const h = outH
            const w = outW

            const rectW = Math.min(w * 0.85, 400)
            const rectH = h * 0.1
            const rectX = (w - rectW) / 2
            const rectY = h * 0.05
            const cornerRadius = 24

            // Glassmorphic background
            ctx.beginPath()
            ctx.roundRect(rectX, rectY, rectW, rectH, cornerRadius)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
            ctx.fill()

            // Shadow
            ctx.shadowColor = 'rgba(0, 0, 0, 0.15)'
            ctx.shadowBlur = 30
            ctx.shadowOffsetY = 10

            // Subtle Border
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
            ctx.lineWidth = 2
            ctx.stroke()

            // Reset shadow completely to prevent doubling on text
            ctx.shadowBlur = 0
            ctx.shadowOffsetY = 0
            ctx.shadowOffsetX = 0
            ctx.shadowColor = 'transparent'

            // Text
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            const centerX = w / 2

            ctx.fillStyle = '#6B7280'
            ctx.font = `600 ${Math.floor(rectH * 0.15)}px "Inter", system-ui, sans-serif`
            const yearText = metadata.year === 0 ? 'ALL TIME YOU READ' : `IN ${metadata.year} YOU READ`
            ctx.fillText(yearText, centerX, rectY + rectH * 0.28)

            ctx.fillStyle = '#111827'
            ctx.font = `800 ${Math.floor(rectH * 0.38)}px "Inter", system-ui, sans-serif`
            ctx.fillText(metadata.height, centerX, rectY + rectH * 0.58)

            ctx.fillStyle = '#4B5563'
            ctx.font = `500 ${Math.floor(rectH * 0.15)}px "Inter", system-ui, sans-serif`
            ctx.fillText(`≈ ${metadata.comparison}`, centerX, rectY + rectH * 0.85)

            return outCanvas.toDataURL('image/png')
        }
    }))

    return (
        <OrbitControls
            ref={controlsRef}
            target={target}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={3}
            maxDistance={100}
        />
    )
})
