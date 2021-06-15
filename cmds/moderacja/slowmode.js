const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'slowmode',
    description: 'slowmode',
    execute(message, args) {
if (!message.member.hasPermission("MANAGE_MESSAGES")){
    messages.channel.send(new Discord.MessageEmbed() .setDescription('🎬 Nie masz permisji do użycia tej komendy') .setColor('RANDOM'))
    return;
}

if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('🎬 Wpisz prawdziwą liczbe!') .setColor('RANDOM'));
if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('🎬 Wpisz prawdziwą liczbe!') .setColor('RANDOM'));
if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setDescription('🎬 Liczba musi być od 1 - 21600') .setColor('RANDOM'))

const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

    channel.setRateLimitPerUser(args[0])
    message.channel.send(new Discord.MessageEmbed() .setDescription(`🎬 Slowmode ustawiony do ${args[0]}`) .setColor('RANDOM'))
    return;

message.channel.send(new Discord.MessageEmbed() .setDescription(`🎬 Slowmode ustawiony do ${args[0]}`) .setColor('RANDOM'))

.catch((e) => {
    message.channel.send('Error!')
    e ? console.error(e) : console.log('Error')
})
}
}
