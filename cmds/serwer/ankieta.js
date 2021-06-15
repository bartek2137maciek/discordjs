const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ankieta',
    aliases: ['poll', 'stworzankiete'],
    description: 'zrób ankietę!',
    async execute(message, args, Discord) {
        let Arguments = args.join(' ');
 
        const newEmbed = new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(`Ankieta: ${Arguments}?`)
        .setDescription('Ankieta. ')
        .setFooter('Użyj reakcji, aby zagłosować.');
 
        let messageEmbed = await message.channel.send(newEmbed);
 
        messageEmbed.react('👍');
        messageEmbed.react('👎');
    }
}