module.exports = {
    name: 'invite',
    aliases: ['zapros', 'zaproszenie'],
    description: 'zaproś bota na własny serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#93C0F1')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/oauth2/authorize?client_id=853666453324300329&scope=bot&permissions=8589934591')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter('Z góry dzięki!');
 
        message.channel.send(newEmbed);
    }
}