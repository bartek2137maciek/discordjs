const { set } = require('mongoose');
const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: "warnings",
    aliases: ['infractions'],
    description: "see someone warnings!",
    async execute(client, message, args, Discord){
    
        const userTarget = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!userTarget) {
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Nie podałeś użytkownika.`)
            .setColor('#282a2f')
            )
            return;
        }

        const results = await warnSchema.findOne({
            userID: userTarget.id,
            guildID: message.guild.id
        })

        if(!results || results === null) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`Użytkownik nie ma warnów.`)
                .setColor('#282a2f')
            )
            return;
        }

        let reply = `**Ostrzeżenia użytkownika ${userTarget} (${userTarget.id}):**\n\n`;

        for(const warning of results.warnings) {
            const { moderator, timestamp, reason, warnID } = warning;

            reply += `**ID: ${warnID} | Moderator: ${moderator}** \n Powód: ${reason} - ${new Date(timestamp).toLocaleDateString()} \n\n`;
        }

        message.channel.send(new Discord.MessageEmbed() .setDescription(reply))
    }
}

// {prefix}warnings <ID lub @wzmianka>