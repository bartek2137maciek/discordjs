const validStatusTypes = [
    'playing',
    'streaming',
    'listening',
    'competing',
    'watching'
]

module.exports = {
    name: 'status',
    aliases: [],
    description: "set status!",
    async execute(message, args, Discord, client) {
        let type;

        if(args[0] === validStatusTypes[0]) {
            type = 'PLAYING'
        } else if (args[0] === validStatusTypes[1]) {
            type = 'STREAMING'
        } else if (args[0] === validStatusTypes[2]) {
            type = 'LISTENING'
        } else if (args[0] === validStatusTypes[3]) {
            type = 'COMPETING'
        } else if (args[0] === validStatusTypes[4]) {
            type = 'WATCHING'
        } else {
            message.channel.send(`Nie podałeś prawidłowego typu statusu!\n\nUżyj \`${validStatusTypes.join(', ')}\``);
            return;
        }

        const content = args.slice(1).join(' ');
        if(!content) {
            message.channel.send('Nie podałeś treści statusu.');
            return;
        }

        try {
            client.user.setActivity(content, { type } ).then(() => {
                message.channel.send('Pomyslnie ustawiono nowy status.');
            });
        } catch (err) {
            message.channel.send("Nie udało się ustawić statusu. Spróbuj ponownie później.")
        }
    }
}
