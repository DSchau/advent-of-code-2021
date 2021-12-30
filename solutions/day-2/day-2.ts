export function calculateDepth(input: string, aim: boolean = false): number {
  const pairs = input.trim().split('\n')
    .map(pair => {
      const [instruction,num] = pair.split(' ')

      return [instruction, parseInt(num, 10)]
    })

  const counters = {
    position: 0,
    depth: 0,
    aim: 0
  }

  const instructions = {
    forward(num) {
      counters.position += num
      if (aim) {
        counters.depth += counters.aim * num
      }
    },
    down(num) {
      if (aim) {
        counters.aim += num
      } else {
        counters.depth += num
      }
    },
    up(num) {
      if (aim) {
        counters.aim -= num
      } else {
        counters.depth -= num
      }
    }
  }

  pairs.forEach(([instruction, num]) => {
    const fn = instructions[instruction]
    if (fn) {
      fn(num)
    }
  })

  return counters.position * counters.depth
}
