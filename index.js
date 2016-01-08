'use strict'

module.exports = function completor(input, arr, sensitive) {
  if (sensitive)
    return caseSensitive(input, arr)

  return caseInsensitive(input, arr)
}

module.exports.sensitive = caseSensitive
module.exports.insensitive = caseInsensitive

function caseInsensitive(input, arr) {
  const v = input.toLowerCase()
  const out = []
  const len = arr.length
  for (var i = 0; i < len; i++) {
    const name = arr[i].toLowerCase()
    if (name.indexOf(v) === 0)
      out.push(arr[i])
  }

  return out
}

function caseSensitive(input, arr) {
  const out = []
  const len = arr.length
  for (var i = 0; i < len; i++) {
    const name = arr[i]
    if (name.indexOf(input) === 0)
      out.push(name)
  }

  return out
}
