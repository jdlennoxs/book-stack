import { Box, Grid } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const getGridColor = (hex?: string) => {
  switch (hex) {
    case '#4F46E5': return '#6D65EE'; // lighter purple
    case '#F6BDCC': return '#FCE2E9'; // almost white pink
    case '#094229': return '#12613F'; // lighter green
    default: return '#ffffff';
  }
}

// The scene has a LOT of bright lights (intensity ~2.5 total). 
// This function drastically darkens the raw floor hex so that when the lights hit it, 
// the computed lit color closely matches the pristine sky background hex.
const getCompensatedFloorColor = (hex?: string) => {
  switch (hex) {
    case '#4F46E5': return 'rgb(64, 68, 251)'; // user-provided adjusted purple
    case '#F6BDCC': return 'rgb(247, 155, 187)'; // user-provided adjusted pink
    case '#094229': return '#083823'; // slightly darkened green
    default: return hex;
  }
}

export function Ground({ color = "#4F46E5" }: { color?: string }) {
  const gridColor = getGridColor(color);
  const floorColor = getCompensatedFloorColor(color);
  return (
    <>
      <RigidBody type="fixed" restitution={0.01} friction={1}>
        <Box args={[2000, 2, 2000]} position={[0, -1, 0]} receiveShadow>
          <meshStandardMaterial color={floorColor} roughness={1} metalness={0} />
        </Box>
      </RigidBody>
      <Grid
        position={[0, 0.01, 0]}
        args={[2000, 2000]}
        cellSize={1}
        cellThickness={1}
        sectionSize={3.0}
        sectionThickness={1.2}
        cellColor={gridColor}
        sectionColor={gridColor}
        fadeDistance={50}
        fadeStrength={1.5}
        infiniteGrid
      />
    </>
  )
}