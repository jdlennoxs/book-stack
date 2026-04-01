import * as THREE from 'three'

export function createPlaceholderTexture(
  color: string,
  emoji: string = '📖'
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  
  // High resolution for crisp emoji
  canvas.width = 512
  canvas.height = 768

  // Fill background
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw emoji
  const fontSize = 280
  ctx.font = `${fontSize}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // Add a slight shadow for the emoji
  ctx.shadowColor = 'rgba(0,0,0,0.3)'
  ctx.shadowBlur = 40
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 20
  
  ctx.fillText(emoji, canvas.width / 2, canvas.height / 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}
