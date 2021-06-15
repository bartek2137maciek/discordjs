module.exports = {
    name: "rps",
    aliases: [],
    description: 'Zaczyna gre w kamień, papier i nożyce ze mną',
    usage: "rps",
    category: "4FUN",
    botPermissions: [],
    userPermissions: [],
    cooldown: 5,
    async execute(message, args, Discord, client) {
        const choice = Math.floor((Math.random() * 3) + 1)
 
        if(choice === 1) {
            var myChoice = '👊'
        } else if(choice === 2) {
            var myChoice = '✋'
        } else if(choice === 3) {
            var myChoice = '✌️'
        }
 
        const embed = new Discord.MessageEmbed()
        .setColor('#FFC400')
        .setTitle('Kamień Papier Nożyce')
        .addFields({
            name: '👊',
            value: 'Kamień',
            inline: true,
        },{
            name: '✋',
            value: 'Papier',
            inline: true,
        },{
            name: '✌️',
            value: 'Nożyce',
            inline: true,
        })
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
 
        await message.channel.send(embed).then(async (messageSend) => {
            messageSend.react('👊')
            messageSend.react('✋')
            messageSend .react('✌️')
 
            const filter = (reaction, user) => reaction.emoji.name === '👊' && user.id === message.author.id || reaction.emoji.name === '✋' && user.id === message.author.id || reaction.emoji.name === '✌️' && user.id === message.author.id
 
            await messageSend.awaitReactions(filter, {max: 1, time: 60000, errors: ["time"],})
            .then(async collected => {
                const choice = collected.first()._emoji.name
                let win
 
                if(choice === '👊'){
                    if(myChoice === '👊'){
                        win = 'remis'
                    } else if(myChoice === '✋'){
                        win = 'bot'
                    } else if(myChoice === '✌️'){
                        win = 'user'
                    }
                } else if(choice === '✋'){
                    if(myChoice === '👊'){
                        win = 'user'
                    } else if(myChoice === '✋'){
                        win = 'remis'
                    } else if(myChoice === '✌️'){
                        win = 'bot'
                    }
                } else if(choice === '✌️'){
                    if(myChoice === '👊'){
                        win = 'bot'
                    } else if(myChoice === '✋'){
                        win = 'user'
                    } else if(myChoice === '✌️'){
                        win = 'remis'
                    }
                }
 
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Kamień Papier Nożyce')
                .addFields({
                    name: 'Twój wybór',
                    value: choice,
                    inline: true,
                },{
                    name: 'Mój wybór',
                    value: myChoice,
                    inline: true,
                })
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
 
                if(win === 'remis'){
                    embed.setDescription('Wynik gry: **remis**')
                } else if(win === 'user'){
                    embed.setDescription('Wynik gry: **twoja wygrana**')
                } else if(win === 'bot'){
                    embed.setDescription('Wynik gry: **moja wygrana**')
                }
 
                message.channel.send(embed)
            }).catch((err) => {
                const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Error!')
                .setDescription('Nie zdążyłeś kliknąć w reakcję!')
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
 
                message.channel.send(embed)
            })
        })
    }
}
