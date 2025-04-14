import { Box } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Ground() {
  return (
    <RigidBody type="fixed" restitution={0.01} friction={1}>
      <Box args={[500, 1, 500]} position={[0, -0.5, 0]} receiveShadow>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
    </RigidBody>
  )
} 