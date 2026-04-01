import * as THREE from 'three';

export interface FramingResult {
    position: THREE.Vector3;
    target: THREE.Vector3;
    zoom: number;
}

/**
 * Calculates the optimal camera position, target, and zoom for a given book stack height
 * and view angle.
 */
export const calculateFraming = (
    totalHeight: number,
    viewAngle: 'flat' | 'isometric',
    viewportHeightPixels: number,
    maxZoomCap: number = 150
): FramingResult => {
    const heightForCalc = Math.max(totalHeight, 0.25);

    // Balanced power function: 0.94 is closer to linear for small stacks 
    // but still prevents extreme zoom-out for very tall towers.
    // Set distinct percentages to account for isometric depth vs flat height
    // We adjust these to ensure the stack is prominent but doesn't clip the edges on mobile.
    const targetPercentage = viewAngle === 'flat' ? 0.51 : 0.47;
    const targetScreenPixels = viewportHeightPixels * targetPercentage;

    // Power factor 0.94 is more conservative for tall stacks as per user preference
    const heightFactor = Math.pow(heightForCalc, 0.92);
    let optimalZoom = targetScreenPixels / heightFactor;

    // Clamp optimalZoom with a higher cap to allow tight framing on small stacks
    optimalZoom = Math.max(Math.min(optimalZoom, maxZoomCap), 3);

    const viewportHeightMeters = viewportHeightPixels / optimalZoom;

    // Focal point (32% from base) ensures resolution-independence and better grounding.
    // The stack base sits perfectly at ~19-20% from the bottom of the screen.
    // We move it slightly higher for isometric mode to avoid collision with bottom UI on mobile.
    const targetYFactor = viewAngle === 'isometric' ? 0.30 : 0.31;
    const targetY = viewportHeightMeters * targetYFactor;

    const distance = 30;
    const direction = viewAngle === 'flat'
        ? new THREE.Vector3(0.03, 0, 1).normalize()
        : new THREE.Vector3(0.4, 0.2, 0.6).normalize();

    const newTarget = new THREE.Vector3(-0.5, targetY, -0.2);
    const offset = direction.clone().multiplyScalar(distance);
    const newPosition = newTarget.clone().add(offset);

    return { position: newPosition, target: newTarget, zoom: optimalZoom };
}
