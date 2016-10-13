import test from 'ava'
import getGlobals from '../lib/index'
import path from 'path'

test(t => {
  t.deepEqual(getGlobals(path.join(__dirname, '/fixtures/detect.js')), [
    'w',
    'x',
    'y',
    'z',
    'foo',
    'process',
    'console',
    'AAA',
    'BBB',
    'CCC',
    'xyz',
    'ZZZ',
    'BLARG',
    'RAWR',
    'beep'
  ].sort())
})
