const { MessageEmbed, Discord } = require('discord.js');
const os = require('os');

module.exports = {
    name: 'host',
    aliases: ['hoststats'],
    category: 'misc',
    description: 'statystyki hostingu',
    async run(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('')
            .setColor('FF0000')
            .setFooter(`© Copyright by Kinius for Ragebot 2021`)
            .setThumbnail()
            .setTimestamp()
            .addField('__**Kodowanie**__', `${Disord.version}`, true)
            .addField('__**Procesor**__', `${os.cpus().map(i => `${i.model}`)[0]}`, true)
            .addField('__**Ram**__', `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
            .setFooter('© Copyright by Kinius for Ragebot 2021')
        message.channel.send(embed);
    },
};