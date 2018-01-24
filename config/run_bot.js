'use strict'

const logger = require('./components/logger')
const redis = require('./components/redis')

module.exports = Object.assign(
  {}, logger, redis
)