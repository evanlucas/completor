'use strict'

const test = require('tap').test
const completor = require('../')

test('completor', (t) => {
  t.plan(3)
  t.type(completor, 'function')
  t.type(completor.sensitive, 'function')
  t.type(completor.insensitive, 'function')
})

test('sensitive', (t) => {
  t.plan(4)

  const input = [
    'brad'
  , 'dan'
  , 'Donald'
  , 'Bradley'
  , 'evan'
  ]

  const o = completor.sensitive('br', input)
  t.deepEqual(o, ['brad'])
  t.deepEqual(o, completor('br', input, true))

  const o2 = completor.sensitive('d', input)
  t.deepEqual(o2, ['dan'])
  t.deepEqual(o2, completor('d', input, true))
})

test('insensitive', (t) => {
  t.plan(4)

  const input = [
    'brad'
  , 'dan'
  , 'Donald'
  , 'Bradley'
  , 'evan'
  ]

  const o = completor.insensitive('br', input)
  t.deepEqual(o, ['brad', 'Bradley'])
  t.deepEqual(o, completor('br', input))

  const o2 = completor.insensitive('d', input)
  t.deepEqual(o2, ['dan', 'Donald'])
  t.deepEqual(o2, completor('d', input))
})
