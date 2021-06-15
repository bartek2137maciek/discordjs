module.exports.run = (client, Discord) => {

    client.on('guildMemberAdd', (guildMember) => {
        const guildId = '842049766484475936';
        const memberCountChannelId = '854001270645587998';
        const nicknameChannel = '854001409296957460';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
        client.channels.cache.get(nicknameChannel).setName(`Nowy: ${guildMember.user.username}`);
    })

    client.on('guildMemberRemove', (guildMember) => {
        const guildId = '854001270645587998';
        const memberCountChannelId = '854001409296957460';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
    })
};