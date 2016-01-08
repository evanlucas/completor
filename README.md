# completor

[![Build Status](https://travis-ci.org/evanlucas/completor.svg)](https://travis-ci.org/evanlucas/completor)
[![Coverage Status](https://coveralls.io/repos/evanlucas/completor/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/completor?branch=master)

Match input in an array for completions.

Say you want to get possible completions for a given string, _str_.
With `completor`, all you have to do is call `completor(str, array)`.

## Install

```bash
$ npm install completor
```

## Usage

```js
const completor = require('completor')

const input = [
  'brad'
, 'dan'
, 'Donald'
, 'Bradley'
, 'evan'
]

completor('br', input)
// => ['brad', 'Bradley']

// can also do
completor.insensitive('br', input)
// => ['brad', 'Bradley']

// or go case sensitive
completor('br', input, true)
// => ['brad']

// can also do
completor.sensitive('br', input)
// => ['brad']
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
