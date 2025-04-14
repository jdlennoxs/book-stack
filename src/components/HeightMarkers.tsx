import { Text, Line } from '@react-three/drei';
import * as THREE from 'three';

type HeightMarkersProps = {
  maxHeight: number; // Maximum height in meters
  intervalMeters: number; // Interval between lines in meters
}

export function HeightMarkers({ maxHeight = 2, intervalMeters = 0.1 }: HeightMarkersProps) {
  // In the scene, 1 unit = 15cm (150mm)
  // So to convert from meters to scene units, multiply by (1/0.15)
  const METERS_TO_SCENE_UNITS = 1 / 0.15; // This gives us ~6.67 scene units per meter
  const VERTICAL_MARKER_SPACING = 10; // Space between vertical markers in scene units
  
  const scaledMaxHeight = maxHeight * METERS_TO_SCENE_UNITS;
  const scaledInterval = intervalMeters * METERS_TO_SCENE_UNITS;
  const extendedWidth = 1000; // Much wider to appear infinite
  const visibleWidth = 100; // Width for placing vertical markers
  
  const markers = [];
  const verticalMarkers = [];
  
  // Create horizontal markers at each height interval
  for (let height = 0; height <= scaledMaxHeight; height += scaledInterval) {
    // Calculate vertical fade based on height
    const verticalFade = Math.max(0.3, 1 - (height / scaledMaxHeight) * 0.7);
    
    // Create points with varying opacity for horizontal fade
    const numSegments = 20;
    const points = [];
    const colors = [];
    
    for (let i = 0; i <= numSegments; i++) {
      const x = (i / numSegments) * extendedWidth - extendedWidth / 2;
      points.push(new THREE.Vector3(x, 0, 0));
      
      // Calculate horizontal fade based on distance from center
      const horizontalFade = Math.max(0.3, 1 - Math.abs(x) / (extendedWidth / 2) * 0.7);
      const opacity = 0.6 * verticalFade * horizontalFade;
      colors.push(new THREE.Color(opacity, opacity, opacity));
    }
    
    markers.push(
      <group key={height} position={[0, height, 0]}>
        <Line
          points={points}
          vertexColors={colors}
          color="#ffffff"
          transparent
          dashed
          dashSize={0.2}
          gapSize={0.3}
        />
      </group>
    );
  }

  // Create vertical markers at regular intervals
  const numVerticalMarkers = Math.floor(visibleWidth / VERTICAL_MARKER_SPACING);
  for (let i = 0; i <= numVerticalMarkers; i++) {
    const xPos = (i * VERTICAL_MARKER_SPACING) - (visibleWidth / 2);
    const markerGroup = [];

    // Calculate horizontal fade based on distance from center
    const horizontalFade = Math.max(0.3, 1 - Math.abs(xPos) / (visibleWidth / 2) * 0.7);

    // Add vertical line with gradient effect
    const verticalPoints = [];
    const verticalColors = [];
    const numVerticalSegments = 20;
    
    for (let j = 0; j <= numVerticalSegments; j++) {
      const y = (j / numVerticalSegments) * scaledMaxHeight;
      verticalPoints.push(new THREE.Vector3(xPos, y, 0));
      
      const verticalFade = Math.max(0.3, 1 - (y / scaledMaxHeight) * 0.7);
      const opacity = 0.5 * horizontalFade * verticalFade;
      verticalColors.push(new THREE.Color(opacity, opacity, opacity));
    }

    markerGroup.push(
      <Line
        key={`line-${i}`}
        points={verticalPoints}
        vertexColors={verticalColors}
        color="#ffffff"
        transparent
        dashed
        dashSize={0.2}
        gapSize={0.3}
      />
    );

    // Add height labels at each interval for this vertical marker
    for (let height = 0; height <= scaledMaxHeight; height += scaledInterval) {
      const realHeight = height / METERS_TO_SCENE_UNITS;
      const verticalFade = Math.max(0.3, 1 - (height / scaledMaxHeight) * 0.7);
      const labelOpacity = Math.min(1, verticalFade * horizontalFade * 1.5);
      
      markerGroup.push(
        <Text
          key={`label-${i}-${height}`}
          position={[xPos + 0.1, height, 0]}
          fontSize={0.15}
          color={`rgba(255, 255, 255, ${labelOpacity})`}
          anchorX="left"
          anchorY="middle"
        >
          {`${(realHeight * 100).toFixed(0)}cm`}
        </Text>
      );
    }

    verticalMarkers.push(
      <group key={`marker-${i}`}>
        {markerGroup}
      </group>
    );
  }

  return (
    <group position={[0, 0, -2]}>
      {verticalMarkers}
      {markers}
    </group>
  );
} 