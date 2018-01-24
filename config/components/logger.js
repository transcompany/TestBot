'use strict'

const winston = require('winston')

const config = {
  logger: {
    level: envVars.LOGGER_LEVEL,
    enabled: envVars.LOGGER_ENABLED,
    googleCloudTransportEnabled: envVars.GOOGLE_CLOUD_TRANSPORT_ENABLED
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
