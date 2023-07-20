const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.action('offers__primary-endodontic', (ctx) => { 
    ctx.editMessageText('Первичная обработка, дезинфекция и пломбирование пространства корневых каналов. Лечение патологии пульпы и периапикальных тканей.', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Работы (до/после)', 'cases__primary-endodontic--one'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
                Markup.callbackButton('Назад', 'offers')
            ],
        ])
    }) 
})

composer.action('offers__repeated_endodontic', (ctx) => { 
        ctx.editMessageText('Повторное лечение пространства корневых каналов, устранение ошибок и последствий ранее неудачного лечения. Лечение патологии периапикальных тканей и пародонта.', {
            reply_markup: Markup.inlineKeyboard([
                [
                    Markup.callbackButton('Работы (до/после)', 'cases__repeated_endodontic--one'),
                ],
                [
                    Markup.callbackButton('Записаться на прием', 'contact-form')
                ],
                [
                    Markup.callbackButton('Назад', 'offers')
                ],
        ])
    })
})

composer.action('offers__direct-restoration', (ctx) => { 
    ctx.editMessageText('Восстановление внешнего вида и функции твердых тканей зуба. Лечение кариеса.', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Работы (до/после)', 'cases__direct-restoration--one'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
                Markup.callbackButton('Назад', 'offers')
            ],
        ])
    })
})

composer.action('offers__professional-hygiene', (ctx) => { 
    ctx.editMessageText('Устранение зубных отложений, комплекс мер направленных на поддержание здоровья пародонта', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Работы (до/после)', 'cases__professional-hygiene--one'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
                Markup.callbackButton('Назад', 'offers')
            ],
        ])
    })
})

composer.action('offers__diagnosis', (ctx) => { 
    ctx.editMessageText('Диагностика и консультация', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Работы (до/после)', 'cases__diagnosis--one'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
                Markup.callbackButton('Назад', 'offers')
            ],
        ])
    })
})

composer.action('offers__microsurgery', (ctx) => { 
    ctx.editMessageText('Микрохирургические зубосохраняющие операции', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Работы (до/после)', 'cases__microsurgery--one'),
            ],
            [
                Markup.callbackButton('Записаться на прием', 'contact-form')
            ],
            [
                Markup.callbackButton('Назад', 'offers')
            ],
        ])
    })
})

module.exports = composer