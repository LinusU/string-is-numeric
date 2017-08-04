module.exports = function stringIsNumeric (input) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string')
  }

  if (Number.isNaN(Number.parseFloat(input))) {
    return false
  }

  return Number.isFinite(Number(input))
}
