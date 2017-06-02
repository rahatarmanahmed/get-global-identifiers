# get-global-identifiers [![Build Status](https://travis-ci.org/rahatarmanahmed/get-global-identifiers.svg?branch=master)](https://travis-ci.org/rahatarmanahmed/get-global-identifiers)

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/get-global-identifiers.svg)](https://greenkeeper.io/)
Returns an array of global identifiers for a given js file.

## Installing
`npm install get-global-identifiers`

## Example usage
```js
const getGlobals = require('get-global-identifiers');

const globals = getGlobals('app/appConstants.js') // ['GLOBAL', 'CONSTANTS', 'DEFINED', 'IN', 'THIS', 'FILE']
```
