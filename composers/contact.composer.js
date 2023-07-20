const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.action('contact', (ctx) => { 
    ctx.editMessageText('Убедитесь, что нужного ответа нет в разделе: "Часто задаваемые вопросы". Если ответа нет – напишите вопрос в поле ввода или свяжитесь любым удобным способом из раздела "Контакты специалиста"', {
      reply_markup: Markup.inlineKeyboard([
                [
                  Markup.callbackButton('Часто задаваемые вопросы', 'questions')
                ],
                [
                  Markup.callbackButton('Контакты специалиста', 'contact-list')
                ],
                [
                  Markup.callbackButton('Назад', 'back-home')
                ],
          ])
        })
      })

      module.exports = composer