const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const {token, prefix} = require('./config.js');
const fs = require('fs')
const nodemon = require('nodemon');
const chalk = require("chalk");

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

['command.handler', 'event.handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})
// const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));
 
 
// client.once('ready', () => {
//     console.log(chalk.redBright(`Aplikacja o nazwie ${client.user.tag} połączył się z Discordem!`));
//     client.user.setActivity('dev: szhxk#6969', {type: 'LISTENING'});
// });


// client.on('guildMemberAdd', guildMember =>{
//     const channel = guildMember.guild.channels.cache.get('842049766921469974');

//     const embed = new Discord.MessageEmbed()
//     .setColor('#B5BFFF')
//     .setTitle("Dołączył do nas nowy użytkownik!")
//     .setDescription(`<@${guildMember.user.id}> dołączył do serwera!\n`
//         + `Jest nas teraz **${client.guilds.cache.get('842049766484475936').memberCount}**`);

//     channel.send(embed);
// })


// for (const file of commandFiles) {
//     const command = require(`./komendy/${file}`);
//     client.commands.set(command.name, command);
// }

 
// client.on('message', message =>{
//     if (!message.content.startsWith(prefix) || message.author.bot) return;
 
//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();
 
//     if (command === 'boop') {
// client.commands.get('boop').execute(message, args);
//     } else if (command === 'ping') {
//         client.commands.get('ping').execute(message, args, chalk);
//     } else if (command === 'testafk') {
//         client.commands.get ('testafk').execute(message, args);
//     } else if (command === 'invite') {
//         client.commands.get ('invite').execute(message, args, Discord);
//     } else if (command === 'ankieta') {
//         client.commands.get ('ankieta').execute(message, args, Discord);
//     } else if (command === 'kick') {
//         client.commands.get ('kick').execute(message, args);
//     } else if (command === 'ban') {
//         client.commands.get ('ban').execute(message, args);
//     } else if (command === 'clear') {
//         client.commands.get ('clear').execute(message, args);
//     } else if (command === 'suggest') {
//         client.commands.get ('suggest').execute(message, args, Discord);
//     } else if (command === 'nickname') {
//         client.commands.get ('nickname').execute(message, args, Discord, client);
//     } else if (command === 'rr') {
//         client.commands.get ('rr').execute(message, args, Discord, client);
//     } else if (command === 'userinfo') {
//         client.commands.get ('userinfo').execute(message, args, Discord, client);
//     } else if (command === 'say') {
//         client.commands.get ('say').execute(message, args, Discord, client);
//     }
// });
 
 
client.login(process.env.DISCORDBOTOKEN);