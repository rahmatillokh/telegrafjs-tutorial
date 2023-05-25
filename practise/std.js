const axios = require('axios')
const { bot } = require("../core/bot")
const { Composer, Markup } = require("telegraf")

const url = "https://jsonplaceholder.typicode.com/users/"

const composer = new Composer()

composer.command('std', async ctx=>{
    let users = [];
    let keyboards = []
    let data = await axios.get(url).then(res =>{
        return res.data
    })
    data.map((user) =>{
        keyboards.push(
            ctx.replyWithHTML('Please choose the user: ',{ 
                reply_markup:{
                        inline_keyboard:[[{text: `${user.name}`, url:`https://jsonplaceholder.typicode.com/users/${user.id}`}]] 
                }
            })
        ) 
    })    
})

bot.use(composer.middleware())