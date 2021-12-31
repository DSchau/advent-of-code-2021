const parseInput = (input: string): string[] => input.trim().split('\n')

export const getDigits = (input: string, mode: { gamma?: boolean; epsilon?: boolean }, decimal: boolean = true): number | string => {
  const parsed = parseInput(input)

  const normalizedArrays = parsed.reduce((merged, str) => {
    const split = str.split('')
    for (let i = 0; i < split.length; i++) {
      if (!merged[i]) {
        merged[i] = []
      }
      merged[i].push(parseInt(split[i], 10))
    }
    return merged
  }, [])

  const binaryDigits = []

  for (let i = 0; i < normalizedArrays.length; i++ ) {
    let counters = {}
    const characters = normalizedArrays[i]
    for (let j = 0; j < characters.length; j++) {
      const char = characters[j]
      if (!counters[char]) {
        counters[char] = 0
      }

      counters[char] += 1
    }

    const keys = Object.keys(counters)
    const values = keys.map(key => counters[key])
    const parent = value => keys.find(key => counters[key] === value)

    const max = parent(Math.max(...values))
    const min = parent(Math.min(...values))
    
    binaryDigits.push(!!mode.gamma ? max : min)
  }

  return decimal ? parseInt(binaryDigits.join(''), 2) : binaryDigits.join('')
}

export function getPowerConsumption(input: string): number {
  const gamma = getDigits(input, { gamma: true }) as number
  const epsilon = getDigits(input, { epsilon: true }) as number

  return gamma * epsilon
}
