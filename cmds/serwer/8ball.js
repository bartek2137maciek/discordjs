module.exports = {
    name: "8ball",
    description: "8ball odpowie!",
    execute(message, args, Discord, client) {
        const answers = [
            'Zdecydowanie **tak**',
            'Zdecydowanie **nie**',
            '**Nie**, ale nie jestem pewny',
            '**Tak**, ale nie mogę tego obiecać',
            'Nie da się na to pytanie odpowiedzieć',
            'Znam odpowiedź, ale nie mogę jej zdradzić.',
            'To pytanie nigdy nie zostanie rozwiązane.',
            'A daj mi spokój!'
        ];

        const generator_liczb = answers[Math.floor(Math.random() * answers.length)];

        const pytanie = args.join(' ');

        let embed = new Discord.MessageEmbed()
        .setColor('#B5BFFF')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`8ball - ${pytanie}`)
        .setDescription(`Pytanie: **${pytanie}**\n`
            + ` \n`
            + ` Odpowiedź: ${generator_liczb} \n`
        );

        message.channel.send(embed);

        
    }
}
