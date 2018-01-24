'use strict'

const TelegramBot = require('telebot')
const logger = require('winston')
const config = require('../config')
const TOKEN = '411900921:AAEQaEn2kN2raTKQa2nqz9szhWvxy5WgI68'

const bot = new TelegramBot(TOKEN)

bot.on('text', (msg) => {
  logger.debug(msg.from.id)
})

bot.on('newChatMembers', (msg) => {
  logger.debug(msg.new_chat_members)
})

bot.on('leftChatMember', (msg) => {
  let fromId = msg.from.id
  logger.debug(fromId)
  logger.debug(bot.leftChatMember)
  bot.sendMessage(fromId, 'Hello')
})



bot.start()

