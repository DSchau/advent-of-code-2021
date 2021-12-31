import { describe, expect, it } from 'vitest'

import { sample, puzzleInput } from './input'
import { getPowerConsumption } from './day-3'

describe('day one', () => {
  it('works with base input', () => {
    expect(getPowerConsumption(sample)).toEqual(198)
  })

  it('works with puzzle input', () => {
    expect(getPowerConsumption(puzzleInput)).toEqual(4103154)
  })
})

describe('day two', () => {

})