const { MessageEmbed } = require('discord.js');
const reakcja = '🚫'
const db = require('quick.db')

module.exports.run = async(client, message, args)=>{

  if(message.author.bot) return
  if(message.channel.type === "dm") return
  let msg = message.content.toLowerCase();
      const role2 = message.guild.roles.cache.find(role2 => role2.name == "@everyone");

      const embedticket = new MessageEmbed()
      .setColor("#f00202")
      .addField(`Witaj ${message.author.username}!`, `Poczekaj na Administracje aż ci odpowie!`)
      .setFooter("Daj reakcje 🚫 aby zamknąć Ticketa!")
      .setTimestamp();
    

        let ticketchannel =  await message.guild.channels.create(`ticket-${message.author.username}`,  { 
              permissionOverwrites: [
                  {
                    id: role2.id,
                    deny: "VIEW_CHANNEL",
                  }, {
                    id: message.author.id,
                    allow: "VIEW_CHANNEL",
                  },
                ]

          })
         
          const gejek = await ticketchannel.send(embedticket)
           ticketchannel.send(`${message.author}`).then(() => {
              const embedcreated = new MessageEmbed()
              .setColor("#fb00ff")
              .setDescription(`Twój ticket został utworzony : ` + `${ticketchannel}` )
              .setTitle("Ticket")
              .setFooter( ` ${message.author.tag}`)
              .setTimestamp()
              message.channel.send(embedcreated);
              db.set(`ticket-${message.author.id}-${ticketchannel.id}`, ticketchannel.id)
              gejek.react('🚫')
             
           })
}

module.exports.help = {
    name: "ticket",
}