// index.js
'use strict'

var isFinite = require('lodash/isFinite')
var some = require('lodash/some')

var Big = require('big.js')

module.exports = {
  forceFinite: forceFinite,
  forceNonZero: forceNonZero,
  add: function (x, y) {
    forceFinite(x, y)
    return Number(Big(x).plus(y))
  },
  div: function (x, y) {
    forceFinite(x, y)
    forceNonZero(y)
    return Number(Big(x).div(y))
  }
}

function forceFinite () {
  if (some(arguments, function (arg) { return !isFinite(arg) })) {
    throw Error('Finite number must be provided instead of ' + JSON.stringify(arguments))
  }
}

function forceNonZero () {
  if (some(arguments, function (arg) { return arg === 0 })) {
    throw Error('Nonzero number must be provided instead of ' + JSON.stringify(arguments))
  }
}
