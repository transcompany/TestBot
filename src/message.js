'use strict'

const message = {
  START: 'Welcome to our bot\nYou can try these function:\n\
  /subscribe - subscribe to our bot\n\
  /bitcoin - get any coin you want\n\n\
  Or you can try our website version : https://bitscreener.com/ ✅',
  SUBSCRIBE: 'Welcome to our services !!! 💯',
  UNSUBSCRIBE: 'We hope you will subscribe again soon 👋🏻',
  SUBSCRIBED: 'You have already subscribed',
  UNSUBSCRIBED: 'You haven\'t subscribed yet',
  SUBSCRIBESTATUS: (status) => `You can choose to subscribe or unsubscribe from our \
system\ncurrent status is : ${status}`
}

module.exports = message