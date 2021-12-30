import { describe, expect, it } from 'vitest'

import { calculateDepth } from './day-2'
import inputs from './inputs'

describe('calculate horizontal and vertical depth', () => {
  it('works with base case', () => {
    expect(calculateDepth(inputs.one)).toEqual(150)
  })

  it('works with puzzle input', () => {
    expect(calculateDepth(inputs.two)).toEqual(2091984)
  })
})

describe('with aim', () => {
  it('works with base case', () => {
    expect(calculateDepth(inputs.one, true)).toEqual(900)
  })

  it('works with puzzle input', () => {
    expect(calculateDepth(inputs.two, true)).toEqual(2086261056)
  })
})
