const { Markup } = require('telegraf');
const { bot } = require('../core/bot');


bot.command("test", ctx=>{

    ctx.telegram.sendMessage(
        ctx.from.id,
        "testing url buttons",
        {
            reply_markup: {
                inline_keyboard:[
                    [ { text: "Button 1", callback_data: 'inline' }, {text: "button 2", url: "google.com"}]
                ]
            }
        }
    ).then()
})

bot.action('inline', ctx=>{
    ctx.editMessageText(
        'Tested'
    ).then()
})