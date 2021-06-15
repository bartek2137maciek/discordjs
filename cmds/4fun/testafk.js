module.exports = {
    name: 'testafk',
    aliases: ['afk'],
    description: 'sprawdza czy bot jest online!',
    execute(message, args) {
        message.react('✅')
        message.channel.send('Nie śpię!');
    },
};