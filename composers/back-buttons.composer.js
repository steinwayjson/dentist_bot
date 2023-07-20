const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.action('back-home', (ctx) => { 
    ctx.editMessageText('Выберите интересующий раздел меню:', {
        reply_markup: Markup.inlineKeyboard([
            [
              Markup.callbackButton('Услуги', 'offers'),
            ],
            [
              Markup.callbackButton('Научная деятельность', 'credit')
            ],
          ])
        })
      })

module.exports = composer