import * as THREE from 'three'

export function createTransparentMaterial(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide
  })
}

export function createCoverMaterial(color: string, texture?: THREE.Texture): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    map: texture,
    roughness: 0.6,
    metalness: 0.1,
    clearcoat: 0.3,
    clearcoatRoughness: 0.6,
    side: THREE.DoubleSide
  })
}

export function createSpineMaterial(
  color: string,
  textures: { colorTexture: THREE.CanvasTexture; bumpTexture: THREE.CanvasTexture } | null
): THREE.MeshPhysicalMaterial {
  if (!textures) {
    return new THREE.MeshPhysicalMaterial({ 
      color,
      roughness: 0.6,
      metalness: 0.1,
      clearcoat: 0.3,
      clearcoatRoughness: 0.6,
      side: THREE.DoubleSide
    })
  }
  
  return new THREE.MeshPhysicalMaterial({
    map: textures.colorTexture,
    bumpMap: textures.bumpTexture,
    roughness: 0.6,
    metalness: 0.1,
    clearcoat: 0.3,
    clearcoatRoughness: 0.6,
    bumpScale: -0.04,
    side: THREE.DoubleSide
  })
}

export function createPageMaterial(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: '#FFFFFF',
    roughness: 0.7
  })
} 