import * as THREE from 'three'
import WebFont from 'webfontloader'

// Array of Google Fonts suitable for book spines
const BOOK_FONTS = [
  // Serif fonts
  'Libre Baskerville',
  'Merriweather',
  'EB Garamond',
  // Sans-serif fonts
  'Montserrat',
    'Inter',
    'Arial'
]

// Create a promise that resolves when fonts are loaded
const fontsLoaded = new Promise<void>((resolve) => {
  WebFont.load({
    google: {
      families: BOOK_FONTS
    },
    active: () => resolve(),
    inactive: () => {
      console.warn('Failed to load some fonts, falling back to system fonts')
      resolve()
    }
  })
})

// Get a random font from the array
function getRandomFont(): string {
  const fallbackFonts = ', serif' // Fallback to serif if the specific font isn't available
  const randomFont = BOOK_FONTS[Math.floor(Math.random() * BOOK_FONTS.length)]
  return `"${randomFont}"${fallbackFonts}`
}

// Determine if text should be white or black based on background color
function getContrastTextColor(bgColor: string): string {
  // Convert hex to RGB
  const hex = bgColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16) / 255
  const g = parseInt(hex.substr(2, 2), 16) / 255
  const b = parseInt(hex.substr(4, 2), 16) / 255
  
  // Calculate relative luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b
  
  // Use white text for darker backgrounds
  return luminance < 0.5 ? '#FFFFFF' : '#000000'
}

// Create textures with the book title
async function createSpineTextures(
  title: string, 
  bgColor: string, 
  depth: number, 
  height: number
): Promise<{ colorTexture: THREE.CanvasTexture; bumpTexture: THREE.CanvasTexture }> {
  // Wait for fonts to load before proceeding
  await fontsLoaded

  const colorCanvas = document.createElement('canvas')
  const colorCtx = colorCanvas.getContext('2d')!
  const aspectRatio = height / depth
  
  // Select a random font for this book
  const bookFont = getRandomFont()
  console.log(`Creating spine texture for "${title}" using font: ${bookFont}`)
  
  // Set canvas size based on the spine dimensions
  colorCanvas.width = 512  // Width for spine depth
  colorCanvas.height = Math.floor(512 * aspectRatio) // Height proportional to book height
  
  // Create bump map canvas with same dimensions
  const bumpCanvas = document.createElement('canvas')
  const bumpCtx = bumpCanvas.getContext('2d')!
  bumpCanvas.width = colorCanvas.width
  bumpCanvas.height = colorCanvas.height
  
  // Fill background
  colorCtx.fillStyle = bgColor
  colorCtx.fillRect(0, 0, colorCanvas.width, colorCanvas.height)
  
  // Fill bump map background with white (full height)
  bumpCtx.fillStyle = 'white'
  bumpCtx.fillRect(0, 0, bumpCanvas.width, bumpCanvas.height)
  
  // Set up text
  const textColor = getContrastTextColor(bgColor)
  colorCtx.fillStyle = textColor
  colorCtx.textAlign = 'center'
  colorCtx.textBaseline = 'middle'
  
  // Set up bump map text (black for sunken effect)
  bumpCtx.fillStyle = 'black'
  bumpCtx.textAlign = 'center'
  bumpCtx.textBaseline = 'middle'
  
  // Function to measure text and check if it fits
  const measureText = (text: string, size: number) => {
    colorCtx.font = `${size}px ${bookFont}`
    const metrics = colorCtx.measureText(text)
    const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    return {
      width: metrics.width,
      height: actualHeight
    }
  }

  // Calculate initial font size - start smaller to maintain proportions
  const spineDepth = colorCanvas.width * 0.8 // Target 80% of spine depth
  let fontSize = Math.max(spineDepth, 120) // Initial max size
  
  // First pass: Find font size that maintains proper aspect ratio
  let metrics = measureText('X', fontSize) // Use 'X' as reference character
  const targetAspectRatio = 1 // Ideal aspect ratio for the font
  
  while (fontSize > 20) {
    metrics = measureText('X', fontSize)
    const currentAspectRatio = metrics.width / metrics.height
    
    // If aspect ratio is within 10% of target, break
    if (Math.abs(currentAspectRatio - targetAspectRatio) < 0.1) {
      break
    }
    fontSize -= 5
  }
  
  // Now check if the actual text fits within our bounds
  metrics = measureText(title, fontSize)
  const maxWidth = colorCanvas.height * 0.9 // Max width for text
  let lines = [title]
  let finalFontSize = fontSize

  // First check if single line needs scaling
  if (metrics.width > maxWidth) {
    // Scale down single line to fit
    finalFontSize = Math.floor((maxWidth / metrics.width) * fontSize)
    
    // If still too large for spine depth, try wrapping
    metrics = measureText(title, finalFontSize)
    if (finalFontSize > spineDepth * 0.9) {
      // Try wrapping text with improved width utilization
      lines = []
      const words = title.split(' ')
      let currentLine = ''
      let bestLines: string[] = []
      let bestLineLength = Infinity
      
      // Try different word combinations to find optimal line breaks
      for (let i = 0; i < words.length; i++) {
        if (currentLine === '') {
          currentLine = words[i]
        } else {
          const testLine = currentLine + ' ' + words[i]
          const testMetrics = measureText(testLine, finalFontSize)
          
          if (testMetrics.width <= maxWidth) {
            currentLine = testLine
          } else {
            lines.push(currentLine)
            currentLine = words[i]
          }
        }
        
        // If we're at the last word, add the remaining line
        if (i === words.length - 1) {
          lines.push(currentLine)
        }
        
        // Check if this arrangement is better balanced
        if (i === words.length - 1) {
          const lineWidths = lines.map(line => measureText(line, finalFontSize).width)
          const widthVariance = Math.max(...lineWidths) - Math.min(...lineWidths)
          
          if (lines.length < bestLineLength || (lines.length === bestLineLength && widthVariance < bestLineLength)) {
            bestLines = [...lines]
            bestLineLength = lines.length
          }
        }
      }
      
      lines = bestLines
      
      // Adjust font size for multiple lines with better width utilization
      finalFontSize = Math.min(
        finalFontSize,
        (colorCanvas.width * 0.9) / lines.length,
        // Scale based on average line length to better utilize width
        (maxWidth * 0.95) / (lines.reduce((sum, line) => 
          sum + measureText(line, finalFontSize).width / finalFontSize, 0) / lines.length)
      )
    }
  }
  
  // Final size check and adjustment
  let maxLineWidth = 0
  let minLineWidth = maxWidth
  do {
    maxLineWidth = 0
    minLineWidth = maxWidth
    lines.forEach(line => {
      const lineMetrics = measureText(line, finalFontSize)
      maxLineWidth = Math.max(maxLineWidth, lineMetrics.width)
      minLineWidth = Math.min(minLineWidth, lineMetrics.width)
    })
    
    // If any line is too wide, reduce size
    if (maxLineWidth > maxWidth) {
      finalFontSize = Math.floor((maxWidth / maxLineWidth) * finalFontSize)
    } else if (maxLineWidth < maxWidth * 0.85 && finalFontSize < fontSize) {
      // If lines are too narrow and we have room to grow, increase size
      finalFontSize += 2
    } else {
      break
    }
  } while (finalFontSize > 20 && finalFontSize < fontSize)

  // Ensure final size doesn't exceed spine depth
  finalFontSize = Math.min(finalFontSize, spineDepth * 0.9)
  
  // Set final font size for both canvases
  colorCtx.font = `${finalFontSize}px ${bookFont}`
  bumpCtx.font = `${finalFontSize}px ${bookFont}`
  
  // Draw text on both canvases
  colorCtx.save()
  bumpCtx.save()
  
  colorCtx.translate(colorCanvas.width / 2, colorCanvas.height / 2)
  bumpCtx.translate(bumpCanvas.width / 2, bumpCanvas.height / 2)
  
  colorCtx.rotate(Math.PI / 2)
  bumpCtx.rotate(Math.PI / 2)
  
  // Draw text with minimal line spacing
  const lineSpacing = 0.9 // Keep the tight line spacing
  const lineHeight = finalFontSize * lineSpacing
  const totalHeight = lines.length * lineHeight
  const startY = -(totalHeight / 2) + (lineHeight / 2)
  
  lines.forEach((line, index) => {
    colorCtx.fillText(line, 0, startY + (index * lineHeight))
    bumpCtx.fillText(line, 0, startY + (index * lineHeight))
  })
  
  colorCtx.restore()
  bumpCtx.restore()
  
  // Create textures with proper wrapping
  const colorTexture = new THREE.CanvasTexture(colorCanvas)
  colorTexture.wrapS = THREE.ClampToEdgeWrapping
  colorTexture.wrapT = THREE.ClampToEdgeWrapping
  colorTexture.needsUpdate = true
  
  const bumpTexture = new THREE.CanvasTexture(bumpCanvas)
  bumpTexture.wrapS = THREE.ClampToEdgeWrapping
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping
  bumpTexture.needsUpdate = true

  console.log(`Created textures for "${title}":`, {
    colorTexture: colorTexture.uuid,
    bumpTexture: bumpTexture.uuid
  })
  
  return { colorTexture, bumpTexture }
}

export { createSpineTextures }