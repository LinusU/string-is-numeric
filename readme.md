# string-is-numeric

Check whether or not a string is numeric.

## Installation

```sh
npm install --save string-is-numeric
```

## Usage

```js
const stringIsNumeric = require('string-is-numeric')

stringIsNumeric('') // false
stringIsNumeric('test') // false

stringIsNumeric('10') // true
stringIsNumeric('0xFF') // true

stringIsNumeric(10) // throws TypeError
stringIsNumeric(null) // throws TypeError
```
