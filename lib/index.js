var fs = require('fs')
var getGlobals = require('acorn-globals')

module.exports = function (path) {
  var constants = fs.readFileSync(path, 'utf8').toString()

  return getGlobals(constants, {
    includeFileVars: true,
    includeFunctionDeclarations: true
  }).map(function (global) {
    return global.name
  })
}
