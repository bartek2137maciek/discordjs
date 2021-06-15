module.exports = {
    name: "create-channel",
    aliases: ['cc'],
    description: "create a channel!",
    execute(message, args, Discord, client) {
    message.guild.channels.create('kanał',{
        type: "text",
    })
}
};