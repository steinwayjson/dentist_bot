const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.command('start', (ctx) => {
    ctx.reply('Выберите интересующий раздел меню:', {
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

composer.command('help', (ctx) => {
  ctx.replyWithHTML('Для управления используйте навигационные кнопки меню. \n\nЧтобы записаться на консультацию, отправьте ФИО и номер телефона. Врач свяжется с вами в ближайшее время. \n\nОбратите внимание, что запись на лечение возможна только после консультации, прохождения осмотра и составления плана лечения. \n \n \n /start - для начала работы с ботом \n /help - вывести помощника', {
  })
})

module.exports = composer