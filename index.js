const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(require('./composers/start.composer.js'))
bot.use(require('./composers/back-buttons.composer.js'))
//bot.use(require('./composers/contact.composer.js'))
bot.use(require('./composers/offers.composer.js'))
bot.use(require('./composers/contact-form.composer.js'))
bot.use(require('./composers/offers-items.composer.js'))
bot.use(require('./composers/cases.composer.js'))

bot.on('message', (ctx) => {

    const sourceChatId = ctx.message.chat.id;
    const admin = '6294618701';
  
    if (ctx.message.text) {
      bot.telegram.forwardMessage(admin, sourceChatId, ctx.message.message_id)
        .then((sentMessage) => {
          console.log('Сообщение успешно переслано:', sentMessage);
        })
        .catch((error) => {
          console.error('Ошибка при пересылке сообщения:', error);
        });
    }
  })


bot.launch()
