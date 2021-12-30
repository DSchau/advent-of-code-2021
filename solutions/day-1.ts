function sanitizeInput(input: string): number[] {
  return input.trim().split('\n').map(part => parseInt(part.trim(), 10))
}

function sum(nums: number[] | undefined): number {
  if (!nums) {
    return 0
  }
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


  let arrs = []
  for (let i = 0; i < depths.length; i++) {
    let temp = [depths[i]]
    let nextWindow = i + scale

    for (let j = i + 1; j < nextWindow; j++) {
      temp.push(depths[j])
    }

    arrs.push(temp)
  }

  let numIncreases = 0
  for (let i = 0; i < arrs.length; i++) {
    const cur = sum(arrs[i])
    const next = sum(arrs[i + 1])

    if (cur < next) {
      numIncreases += 1
    }
  }
  return numIncreases
}
