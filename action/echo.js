const {bot} = require('../core/bot');

bot.on('text', ctx => {
    if (ctx.message.text == 'Salom') {
        ctx.replyWithHTML(`Hey Bro nima gap zerikdingmi`)
    }else{
        ctx.replyWithHTML(ctx.message.text)
    }
})