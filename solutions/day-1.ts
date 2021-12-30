import chunk from 'lodash.chunk'

function sanitizeInput(input: string): number[] {
  return input.trim().split('\n').map(part => parseInt(part.trim(), 10))
}

function sum(nums: number[]): number {
  return nums.reduce((total, part) => total + part)
}

export function depthIncreases(input: string): number {
  const depths = sanitizeInput(input)

  let numIncreases = 0
  let prev
  for (let part of depths) {
    if (prev && prev < part) {
      numIncreases += 1
    }
    prev = part
  }

  return numIncreases
}

export function depthIncreasesWindow(input: string, scale: number = 3): number {
  const depths = sanitizeInput(input)

  const chunked = chunk(depths, scale).filter((part: number[]) => part && part.length === scale)

  let numIncreases = 0
  for (let i = 0; i < chunked.length; i++) {
    const chunk = chunked[i]
    const next = chunked[i + 1]

    if (next) {
      const chunkSum = sum(chunk)
      const nextChunkSum = sum(next)
  
      if (nextChunkSum > chunkSum) {
        numIncreases += 1
      }
    }
  }

  return numIncreases
}
