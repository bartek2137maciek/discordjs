const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: 'warn',
    description: 'Warn a member!',
    async execute(client, message, args, Discord){
        if(!message.member.hasPermissions   ('MANAGE_MESSAGES')) return;
        const userTarget = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!userTarget){
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Nie oznaczyłeś użytkownika.`)
            .setColor('#282a2f')
            );
            return;
        }

        const reason = args.slice(1).join(' ');
        if(!reason){
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Nie podałeś powodu.`)
            .setColor('#282a2f')
            );
            return;
        }

        let warnID = Math.floor(Math.random() * (10000 * 200000) + 1);

        const warning = {
            moderator: message.author.tag,
            timestamp: new Date().getTime(),
            reason,
            warnID
        }

        await warnSchema.findOneAndUpdate({
            userID: userTarget.id,
            guildID: message.guild.id,
        }, {
            $push: {
                warnings: warning
            }
        }, {
            upsert: true
        })

        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${userTarget} został **ostrzeżony** |\`${warnID}\``)
            .setColor('GREEN')
        )
        .then(() => {
            setTimeout(() => message.delete(), 1000);
        })

        userTarget.send(new Discord.MessageEmbed()
            .setDescription(`${userTarget} zostałeś \`zwarnowany\` za: ${reason}`)
            .setColor('#282a2f')
        );

        const now = new Date();
        const logsEmbed = new Discord.MessageEmbed()
        .setAuthor(`Warn | ${warnID} | ${userTarget.tag}`, message.author.displayAvatarURL())
        .setColor('#FFD54F')
        .setFooter(`ID: ${userTarget.id} | ${now.toLocaleString()}`)
        .addFields(
            {
                name: 'Moderator',
                value: message.author.tag,
                inline: true
            },

            {
                name: 'Użytkownik:',
                value: userTarget,
                inline: true
            },
            
            {
                name: 'Powód:',
                value: reason,
                inline: true
            }
        )

        const logsChannel = message.guild.channels.cache.get('853989881759137852');
        logsChannel.send(logsEmbed); 
    }
}
// {prefix}warn <@wzmianka lub ID> <powód>