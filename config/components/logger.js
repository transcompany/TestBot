'use strict'

const winston = require('winston')

const config = {
  logger: {
    level: 'debug',
    enabled: 'true'
  }
}

winston.level = config.logger.level
if (config.logger.enabled && process.env.NODE_ENV !== 'production') {
  winston.remove(winston.transports.Console)
  winston.add(winston.transports.Console, {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: false
  })
}

module.exports = config
