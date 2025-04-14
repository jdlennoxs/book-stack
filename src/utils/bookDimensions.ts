// Calculate base width based on page count
export function calculateBaseWidth(pages: number): number {
  const minWidth = 1
  const maxWidth = 1.5
  const maxPages = 500 // Books with 500+ pages will max out at 1.5 width
  
  // Linear interpolation between minWidth and maxWidth based on pages
  const width = minWidth + (maxWidth - minWidth) * Math.min(pages / maxPages, 1)
  return width
}

// Calculate book depth based on number of pages
export function calculateBookDepth(pages: number): number {
  const PAGE_THICKNESS_MM = 0.12 // Thickness of one page in millimeters
  const SCALE_FACTOR = 150 // 1 unit ≈ 150mm (15cm)
  const COVER_THICKNESS_MM = 2.5 // Approximate thickness of front and back cover
  
  // Calculate total thickness in millimeters (pages + covers)
  const totalThicknessMM = (pages * PAGE_THICKNESS_MM) + COVER_THICKNESS_MM
  
  // Convert to our scene units
  return totalThicknessMM / SCALE_FACTOR
} 