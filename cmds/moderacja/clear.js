module.exports = {
    name: 'clear',
    aliases: ['usun', 'purge', 'clean'],
    description: 'wyczyśc kanał!',
    async execute(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz wystraczających uprawnień do usuwania wiadomości!");
        if (!args[0]) return message.reply("Podaj ilość wiadomości, które chcesz usunąć!");
 
        if(isNaN(args[0])) return message.reply("Podaj numer, nie wyraz!");
 
        if(args[0] < 1) return message.reply("Nie możesz usunąć mniej niż jedną wiadomość!");
 
        if(args[0] > 100) return message.reply("Nie możesz usunąć więcej niż 100 wiadomości!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}