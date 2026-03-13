import React, { useMemo } from 'react';
import { Billboard, Image } from '@react-three/drei';
import { getPersonOutlineSvg } from '../utils/personSvg';

interface PersonReferenceProps {
    position?: [number, number, number];
    height?: number;
}

export const PersonReference: React.FC<PersonReferenceProps> = ({
    position = [-3.2, 0, 0], // Default offset, Y=0 for floor
    height = 16
}) => {
    const personSrc = useMemo(() => getPersonOutlineSvg(), []);

    const width = height * 0.4;

    return (
        <Billboard
            position={position}
            follow={true} // Always face the camera
            lockX={true}  // Prevent tilting forward/backward
            lockY={false} // Allow spinning to face camera
            lockZ={true}  // Prevent tilting side-to-side
        >
            {/* Shift the image up by half its height so the Billboard's origin is at its feet */}
            <Image
                position={[0, height / 2, 0]}
                url={personSrc}
                scale={[width, height]}
                transparent={true}
                opacity={0.8}
            />
        </Billboard>
    );
};
