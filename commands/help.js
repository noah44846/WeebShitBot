const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setTitle("TestBot help")
        .setDescription(`
**-ping** : pong
**-help** : Woah man real meta shit right there!
**-booru <search_parameter>** : sends a Hentai pic from Danbooru (NSFW)
        `)
        .setColor("#bababa");

    message.channel.send(helpEmbed);
}
 
module.exports.help = {
    name: "help"
}
