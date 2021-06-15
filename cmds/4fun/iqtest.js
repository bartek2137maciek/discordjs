const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'iqtest',
    description: 'iqtest XDDD',
    execute(message, args, Discord) {

        var url;
        var liczba = getRandomInt(1, 200);
        const embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Twoja IQ wynosi:\n `' + liczba + '`')
        message.channel.send(embed2)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }