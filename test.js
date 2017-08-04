/* eslint-env mocha */

const stringIsNumeric = require('./')

const assert = require('assert')

const testCases = [
  [true, '-10'],
  [true, '0'],
  [true, '5'],
  [true, '040'],
  [true, '0xFF'],
  [true, '-1.6'],
  [true, '4.536'],
  [true, '123e-2'],
  [false, ''],
  [false, '        '],
  [false, '\t\t'],
  [false, 'abcdefghijklm1234567890'],
  [false, 'xabcdefx'],
  [false, 'bcfed5.2'],
  [false, '7.2acdgs']
]

describe('stringIsNumeric(_)', () => {
  for (const testCase of testCases) {
    it(`returns ${testCase[0]} given "${testCase[1]}"`, () => {
      assert.strictEqual(stringIsNumeric(testCase[1]), testCase[0])
    })
  }

  it('throws on invalid input', () => {
    assert.throws(() => stringIsNumeric(), TypeError)
    assert.throws(() => stringIsNumeric(undefined), TypeError)
    assert.throws(() => stringIsNumeric(null), TypeError)
    assert.throws(() => stringIsNumeric(true), TypeError)
    assert.throws(() => stringIsNumeric(false), TypeError)
    assert.throws(() => stringIsNumeric(NaN), TypeError)
    assert.throws(() => stringIsNumeric(Infinity), TypeError)
    assert.throws(() => stringIsNumeric(Number.POSITIVE_INFINITY), TypeError)
    assert.throws(() => stringIsNumeric(Number.NEGATIVE_INFINITY), TypeError)
    assert.throws(() => stringIsNumeric(0), TypeError)
    assert.throws(() => stringIsNumeric(1), TypeError)
    assert.throws(() => stringIsNumeric(1.1), TypeError)
    assert.throws(() => stringIsNumeric([]), TypeError)
    assert.throws(() => stringIsNumeric({}), TypeError)
    assert.throws(() => stringIsNumeric(new Date(2009, 1, 1)), TypeError)
    assert.throws(() => stringIsNumeric(function () {}), TypeError)
    assert.throws(() => stringIsNumeric(Symbol('test')), TypeError)
  })
})
