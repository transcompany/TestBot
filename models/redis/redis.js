'use strict'

const Redis = require('ioredis')
const config = require('../../config')

const redis = new Redis(config.redis.uri)

module.exports = redis