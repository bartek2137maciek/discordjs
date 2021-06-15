// przesyłamy sobie prefix;
const config = require("../../config");
// chcemy, abyśmy tylko my mogli korzystać z tej komendy. W tym celu zdefiniujemy sobie zmienną z naszym ID;
const onwerId = "740218637473808554";

// eksportujemy pusty obiekt i nadajemy mu nazwę oraz opis.
module.exports = {
  name: "eval",
  aliases: [],
  description: "eval some code!",
  // przesyłamy parametry;
  async execute(message, args, Discord, client) {
    // sprawdzamy, czy ID autora wiadomości jest takie samo jak nasze.
    if (!message.author.id === onwerId)
      return message.channel.send("Only szhxk#1337 can run this command!");

    try {
        const result = eval(message.content.replace(`${config.prefix}eval `, ''))
        message.channel.send(result);
    } catch(err) {
        message.channel.send("Upewnij się, że w kodzie nie ma błędu!");
        console.log(err)
    }
  },
};
