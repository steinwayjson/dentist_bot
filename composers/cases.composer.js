const { Composer, Markup } = require('telegraf')
const composer = new Composer()


// primary endotic cases

composer.action('cases__primary-endodontic--one', (ctx) => {
    ctx.editMessageText('https://telegra.ph/Pervichnoe-ehndodonticheskoe-lechenie-04-28', {
        reply_markup: Markup.inlineKeyboard([
            [
              Markup.callbackButton('<<', 'cases__primary-endodontic'),
              Markup.callbackButton('>>', 'cases__primary-endodontic--two'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
              Markup.callbackButton('Назад', 'offers__primary-endodontic')
            ]
        ])
    })
})


composer.action('cases__primary-endodontic--two', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Pervichnoe-ehndodonticheskoe-lechenie-05-05 ', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__primary-endodontic--one'),
            Markup.callbackButton('>>', 'cases__primary-endodontic--one'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__primary-endodontic')
          ]
      ])
  })
})

// repeated endotic cases

composer.action('cases__repeated_endodontic--one', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Povtornoe-ehndodonticheskoe-lechenie-05-05', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__repeated_endodontic'),
            Markup.callbackButton('>>', 'cases__repeated_endodontic--two'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__repeated_endodontic')
          ]
      ])
  })
})

composer.action('cases__repeated_endodontic--two', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Povtornoe-ehndodonticheskoe-lechenie-05-05-2', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__repeated_endodontic--one'),
            Markup.callbackButton('>>', 'cases__repeated_endodontic--three'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__repeated_endodontic')
          ]
      ])
  })
})

composer.action('cases__repeated_endodontic--three', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Povtornoe-ehndodonticheskoe-lechenie-05-05-3', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__repeated_endodontic--two'),
            Markup.callbackButton('>>', 'cases__repeated_endodontic--one'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__repeated_endodontic')
          ]
      ])
  })
})


// direct restoration of hard tissues cases

composer.action('cases__direct-restoration--one', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Restavraciya-tverdyh-tkanej-zuba-07-12', {
      reply_markup: Markup.inlineKeyboard([
//          [
//           Markup.callbackButton('<<', 'cases__direct-restoration--one'),
//           Markup.callbackButton('>>', 'cases__direct-restoration--one'),
//        ]
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__direct-restoration')
          ]
      ])
  })
})

// professional_hygiene cases

composer.action('cases__professional-hygiene--one', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Professionalnaya-gigiena-05-19', {
      reply_markup: Markup.inlineKeyboard([
//          [
//            Markup.callbackButton('<<', 'cases__professional-hygiene--one'),
//            Markup.callbackButton('>>', 'cases__professional-hygiene--one'),
//          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__professional-hygiene')
          ]
      ])
  })
})

// diagnosis and consultation cases

composer.action('cases__diagnosis--one', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Restavraciya-tverdyh-tkanej-zuba-07-12', {
      reply_markup: Markup.inlineKeyboard([
//          [
//            Markup.callbackButton('<<', 'cases__diagnosis--one'),
//            Markup.callbackButton('>>', 'cases__diagnosis--one'),
//          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__diagnosis')
          ]
      ])
  })
})

// microsurgery and consultation cases

composer.action('cases__microsurgery--one', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Apikalnaya-hirurgiya-07-18', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__microsurgery'),
            Markup.callbackButton('>>', 'cases__microsurgery--two'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__microsurgery')
          ]
      ])
  })
})

composer.action('cases__microsurgery--two', (ctx) => {
  ctx.editMessageText('https://telegra.ph/Apikalnaya-hirurgiya-07-18-2', {
      reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton('<<', 'cases__microsurgery--one'),
            Markup.callbackButton('>>', 'cases__microsurgery--one'),
          ],
          [
            Markup.callbackButton('Записаться на прием', 'contact-form')
          ],
          [
            Markup.callbackButton('Назад', 'offers__microsurgery')
          ]
      ])
  })
})

module.exports = composer