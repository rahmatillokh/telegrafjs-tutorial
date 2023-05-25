const { bot } = require('../core/bot')

bot.start(ctx => {
    const username = ctx.from.first_name
    ctx.replyWithHTML(`Hello ${username}`)
})