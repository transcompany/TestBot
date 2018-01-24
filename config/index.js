'use strict'


const processType = process.env.PROCESS_TYPE
let config

try {
  config = require(`./${processType}`)
} catch (ex) {
  throw ex
}

module.exports = config