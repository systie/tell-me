export const calculateWordDimensions = (text, fontSize, padding) => {
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.visibility = 'hidden'
    div.style.fontSize = `${fontSize}px`
    div.innerText = text
    document.body.appendChild(div)
    
    const rect = div.getBoundingClientRect()
    document.body.removeChild(div)
    
    return {
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  }
  
  export const checkCollision = (rect1, rect2) => {
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom)
  }
  
  export const findValidPosition = (word, fontSize, containerWidth, containerHeight, placedItems, padding) => {
    const { width, height } = calculateWordDimensions(word, fontSize, padding)
    const maxAttempts = 1000
    let attempt = 0
    
    const spiral = (attempt) => {
      const angle = attempt * 0.1
      const radius = attempt * 2
      return {
        x: (containerWidth / 2) + (Math.cos(angle) * radius),
        y: (containerHeight / 2) + (Math.sin(angle) * radius)
      }
    }
  
    while (attempt < maxAttempts) {
      const pos = spiral(attempt)
      
      const newRect = {
        left: pos.x - width / 2,
        right: pos.x + width / 2,
        top: pos.y - height / 2,
        bottom: pos.y + height / 2,
        width,
        height
      }
  
      if (newRect.left < 0 || newRect.right > containerWidth ||
          newRect.top < 0 || newRect.bottom > containerHeight) {
        attempt++
        continue
      }
  
      let hasCollision = false
      for (const placedItem of placedItems) {
        if (checkCollision(newRect, placedItem.rect)) {
          hasCollision = true
          break
        }
      }
  
      if (!hasCollision) {
        return { pos, rect: newRect }
      }
  
      attempt++
    }
    
    return null
  }