const Discord = require('discord.js');
const client = new Discord.Client();
 
module.exports = {
    name: 'unban',
    description: 'unban',
    execute(message, args) {
        const unbanPermisje = new Discord.MessageEmbed()
        .setDescription(`${message.author} Nie masz permisji do odbanowania tej osoby!`)
        .setColor('RANDOM')
 
        const unbanNie = new Discord.MessageEmbed()
        .setDescription(`${message.author} Nie możesz odbanować tej osoby!`)
        .setColor('RANDOM')
 
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(unbanPermisje)
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(unbanNie)
 
        let reason = args.slice(1).join(" ")
        let id = args[0]
 
        const unbanOznacz = new Discord.MessageEmbed()
        .setDescription(`${message.author} Musisz wpisać ID osoby którą chcesz odbanować!`)
        .setColor('RANDOM')
 
        if(!reason) reason = "Nie podano powodu"
        if(!args[0]) return message.reply(unbanOznacz)
 
        if(isNaN(args[0])) return message.reply(unbanOznacz)
 
        message.guild.fetchBans().then(async bans =>{
            const unbanNiema = new Discord.MessageEmbed()
            .setDescription(`${message.author} Nie ma banów na tym serwerze!`)
            .setColor('RANDOM')
            if(bans.size === 0) return message.reply(unbanNiema)
            let bannedUser = bans.find(b => b.user.id == id)
            const unbanNiejest = new Discord.MessageEmbed()
            .setDescription(`${message.author} Ta osoba nie ma bana na tym serwerze!`)
            .setColor('RANDOM')
            if(!bannedUser) return message.reply(unbanNiejest)
            await message.guild.members.unban(bannedUser.user, reason).catch(err =>{
                console.log(err)
                const unbanUdane = new Discord.MessageEmbed()
                .setDescription(`${message.author} Odbanowano!`)
                .setColor('RANDOM')
                return message.channel.send(unbanUdane)
            }).then(() => {
                const unbanUdaneD = new Discord.MessageEmbed()
                .setDescription(`${message.author} Odbanowano ${args[0]}!`)
                .setColor('RANDOM')
                message.channel.send(unbanUdaneD)
            })
        })
    }
}
