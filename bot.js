const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592006355808813129")
setInterval(function() {
channel.send(`Ganmax Baraa Spam Bot Credit Lol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);