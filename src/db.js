'use strict'

const logger = require('winston')
const config = require('../config')
const redis = require('../models/redis')

async function userIsExist(user) {
  const pipeline = redis.pipeline()
  pipeline.sismember('users', user)
  const isExist = await pipeline.exec()
  return (isExist[0][1])
}

async function addUserId(user) {
  const isExist = await userIsExist(user)
  if (isExist === 1) {
    logger.debug('User already exist')
    return 0
  }
  else {
    logger.debug(`Add user_id: ${user} to redis`)
    const updatePipeline = redis.pipeline()
    updatePipeline.sadd('users', user)
    await updatePipeline.exec()
    return 1
  }
  return 0
}

async function removeUserId(user) {
  const isExist = await userIsExist(user)
  if (isExist === 0) {
    logger.debug('User is not exist')
    return 0
  }
  else {
    logger.debug(`Remove user_id: ${user} from redis`)
    const updatePipeline = redis.pipeline()
    updatePipeline.srem('users', user)
    await updatePipeline.exec()
    return 1
  }
  return 0
}

module.exports.userIsExist = userIsExist
module.exports.addUserId = addUserId
module.exports.removeUserId = removeUserId