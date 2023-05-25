const {bot} = require('../core/bot');

bot.on("photo", ctx=>{
    ctx.replyWithHTML("Surat qabul qilindi")
    ctx.replyWithPhoto(ctx.message.photo[0].file_id)
    ctx.telegram.sendMessage(ctx.chat.id, "Akang Kuchaydi")
})