const mongoose = require('mongoose');

module.exports = (client) => {
  console.log("Bot jest online!");

  mongoose.connect('mongodb+srv://bambucia:Uq13CS1VPxe0R3Jx@discordbot.uy0sb.mongodb.net/DiscordBotBD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Połączono z bazą danych.');
  })
  .catch((err) => {
    console.log(err);
  })
};


//password = Uq13CS1VPxe0R3Jx
