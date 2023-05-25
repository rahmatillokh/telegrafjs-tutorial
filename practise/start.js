const {Composer} = require("telegraf")
const {bot} = require("../core/bot")

const composer = new Composer()

composer.start(ctx=>{
    const username = ctx.from.first_name

    ctx.replyWithHTML(
        `Xurmatli ${username} Anonimniy botimizga xush kelibsiz!!!`,
        {
            reply_markup:{
                inline_keyboard:[[{text: "Komandalarni ko'rsatish", callback_data: "help"}]]             
            }
        }
    ).then()
})

composer.action("help", ctx=>{
    ctx.editMessageText(`Botdan foydalanish uchun qo'llanma:`).then()
})

bot.use(composer.middleware())