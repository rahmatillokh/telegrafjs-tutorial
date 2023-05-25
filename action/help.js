const {bot} = require('../core/bot')

bot.help(ctx => {
    let text = `<b>Bizning botimizdagi komandalar:</b> \n`+
    `/start - <code>Botni qayta ishga tushirish</code>\n`+
    `Avtor: <a href="t.me/onlaynmiz">Admin Tog'ov</a> \m\n`+
    ctx.replyWithHTML(`Bot info: ${text}`)
})