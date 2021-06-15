const { Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "deposit",
    aliases: ["dep"],
    description: "wpłać wszystko!",
    async execute(message, args, Discord, Client) {
        if (amount % 1 != 0 || amount <= 0) {
            if (isNaN(amount) || amount % 1 != 0 || amount <= 0) {
                const embed = new MessageEmbed()
                .setColor("RED")
                .setTitle('error!')
                .setdescription('Nie podałeś prawidłowej cyfry!')
                .setFooter(
                    `Komenda wywołana dla ${message.author.username}`,
                    message.author.displayAvatarURL()
                );
                message.channel.send(embed);
                return;
            
        


                }
        }
    },
};