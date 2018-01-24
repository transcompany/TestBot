'use strict'

process.env["NTBA_FIX_319"] = 1
const TelegramBot = require('node-telegram-bot-api')
const logger = require('winston')
const message = require('./message')
const config = require('../config')
const db = require('./db')
const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling : true})

bot.on('callback_query',async (msg) => {
 if (msg.data === 'sub') {
   const status = await db.addUserId(msg.from.id)
   if (status === 1) {
     bot.sendMessage(msg.from.id, message.SUBSCRIBE)
   }
   else {
     bot.sendMessage(msg.from.id, message.SUBSCRIBED)
   }
 }
 else {
   const status = await db.removeUserId(msg.from.id)
   if (status === 1) {
     bot.sendMessage(msg.from.id, message.UNSUBSCRIBE)
   }
   else {
     bot.sendMessage(msg.from.id, message.UNSUBSCRIBED)
   }
 }
})

bot.onText(/\/subscribe/,async (msg) => {
  bot.sendMessage(msg.from.id,
    message.SUBSCRIBESTATUS((await db.userIsExist(msg.from.id)) === 1 ? 'Subscribed' : 'Unsubscribed'), {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Subscribe', callback_data: 'sub'},
        {text: 'Unsubscribe', callback_data: 'unsub'}]
      ]
    }
  })
})

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.from.id, message.START)
})

bot.on('polling_error', error => {
  logger.error(error)
})

async function botStartSendingMess() {
  await bot.sendMessage('-266068618', 'Hello', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Subscribe', url: 't.me/teztlinebot', callback_data: 'subscriibed'}]
      ]
    }
  })
  setInterval(async () => {
    await bot.sendMessage('-266068618', 'Hello', {
        reply_markup: {
        inline_keyboard: [
          [{ text: 'Subscribe', url: 't.me/teztlinebot', callback_data: 'subscriibed'}]
        ]
      }
    })
  }, 1000 * 10 * 60)
}

botStartSendingMess()


