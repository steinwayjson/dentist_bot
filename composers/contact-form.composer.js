const { Composer, Markup } = require('telegraf')
const composer = new Composer()


composer.action('contact-form', (ctx) => { 
  ctx.editMessageText('Чтобы записаться на консультацию отправьте ваши контактные данные. Введите ФИО и номер телефона в сообщении. Врач свяжется с вами в ближайшее время. \n\nОбратите внимание, что запись на лечение возможна только после консультации, прохождения осмотра и составления плана лечения.', {
    reply_markup: Markup.inlineKeyboard([
          [
              Markup.callbackButton('Назад', 'offers')
          ]
      ])
  })
})


module.exports = composer