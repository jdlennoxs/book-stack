import { describe, it, expect } from 'vitest';
import { calculateFraming } from './cameraUtils';

describe('Camera Framing Logic Snapshots', () => {
    const resolutions = {
        desktop: { width: 1920, height: 1080 },
        mobile: { width: 390, height: 844 },
        share: { width: 1080, height: 1920 }
    };

    const testCases = [
        { label: '0.2m', height: 0.2 / 0.15 },
        { label: '1.2m', height: 1.2 / 0.15 },
        { label: '4.0m', height: 4.0 / 0.15 }
    ];
    const angles: ('flat' | 'isometric')[] = ['flat', 'isometric'];

    Object.entries(resolutions).forEach(([name, res]) => {
        describe(`${name} resolution (${res.width}x${res.height})`, () => {
            testCases.forEach(({ label, height }) => {
                angles.forEach(angle => {
                    it(`should match snapshot for ${label} stack in ${angle} view`, () => {
                        const result = calculateFraming(height, angle, res.height);
                        
                        // We snapshot the zoom and targetY specifically as they are the key drivers
                        expect({
                            zoom: Math.round(result.zoom * 100) / 100,
                            targetY: Math.round(result.target.y * 100) / 100,
                            position: {
                                x: Math.round(result.position.x * 100) / 100,
                                y: Math.round(result.position.y * 100) / 100,
                                z: Math.round(result.position.z * 100) / 100
                            }
                        }).toMatchSnapshot();
                    });
                });
            });
        });
    });
});
