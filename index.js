'use strict'

// Require object-path
const objectPath = require('object-path')

// Parse uan string
function uan (text) {
  // Input must be a string
  if (typeof text !== 'string') throw new TypeError('text must be a string')

  // Initial output
  let output = []

  // Get lines from text
  const lines = text
    // Trim extra newlines and whitespace
    .trim()
    // Split on newlines
    .split('\n')
    // Split key and value
    .map((line) => {
      // Split line
      const parts = line.split(/:/)

      // Return split values
      return {
        key: parts[0].trim(),
        value: parts[1]
      }
    })

  // Initial depth and index array
  let depth = 0
  let arrIndex = []

  // For every line
  lines.forEach((line) => {
    // Get strings for depth and indentation
    const depthStr = line.key.match(/^-+/) || ['']
    const indentStr = line.key.match(/\[+/) || ['']

    // Get depth and indentation
    const newDepth = depthStr[0].length
    const indent = indentStr[0].length

    // If key is shallower
    if (newDepth < depth) {
      // Reset values for future use
      for (let i = 0; i < depth - newDepth; i++) {
        arrIndex[depth + i] = undefined
      }

      // Set new depth
      depth = newDepth
    }

    // Increase every indented line
    for (let i = 0; i <= indent; i++) {
      arrIndex[depth + i] = (arrIndex[depth + i] + 1) || 0
    }

    // Increase depth by indentation
    depth += indent

    // Get path array by removing unused parts
    const pathArr = arrIndex.slice(0, depth + 1)

    // Get path from index array
    const path = pathArr.join('.')

    // Get value type
    let value
    if (line.key.includes('"')) value = line.value
    if (line.key.includes('#')) value = parseFloat(line.value, 10)
    if (line.key.includes('/')) value = line.value === 'true'

    // Set output at path to given value
    objectPath.set(output, path, value)
  })

  // Return output
  return output
}

// Export uan
module.exports = uan
