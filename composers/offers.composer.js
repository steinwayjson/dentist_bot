const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.action('offers', (ctx) => { 
    ctx.editMessageText('Выберите услугу:', {
      reply_markup: Markup.inlineKeyboard([
            [
              Markup.callbackButton('Первичное внутриканальное лечение', 'offers__primary-endodontic')
            ],
            [
              Markup.callbackButton('Повторное внутриканальное лечение', 'offers__repeated_endodontic')
            ],
            [
              Markup.callbackButton('Прямая реставрация твердых тканей', 'offers__direct-restoration')
            ],
            [
              Markup.callbackButton('Профессиональная гигиена', 'offers__professional-hygiene')
            ],
            [
              Markup.callbackButton('Диагностика и консультация', 'offers__diagnosis')
            ],
            [
              Markup.callbackButton('Апикальная хирургия', 'offers__microsurgery')
            ],
            [
              Markup.callbackButton('Назад', 'back-home')
            ],
          ])
        })
      })


module.exports = composer