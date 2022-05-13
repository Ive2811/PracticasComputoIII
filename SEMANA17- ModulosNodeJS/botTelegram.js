const { Telegraf } = require("telegraf");
const bot = new Telegraf("5099125644:AAHodgejmlyxWqFKqn5JSFESOpYlZ05qdVg");

bot.start((ctx) => {
    ctx.reply(`Programación Computacional IV, Bienvenido ${ctx.from.first_name}`);
});

//Comando personalizado.
bot.command(['saludar', 'saludo', 'hola'], (ctx) => {
    ctx.reply("¡Buenos días!");
})

bot.on('sticker', (ctx) => {
    ctx.reply("Buen sticker");
});

bot.launch();