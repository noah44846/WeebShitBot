const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const Danbooru = require("danbooru");

module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw) {

        const booru = new Danbooru(botconfig.danbooruLogin + ':' + botconfig.danbooruKey);

        try {
            const posts = await booru.get('/posts', { tags: args.join(" ") });
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]
            const url = booru.url(post.file_url);
            let embed = new Discord.RichEmbed()
            .setTitle("Here you go :")
            .setColor("#bababa")
            .setImage(url);

            message.channel.send(embed);
        } catch (e) {
            console.error(e);
            message.channel.send("No images found to that criteria. ;-;");
        }
    } else {
        message.channel.send(":exclamation:You have to be on a **NSFW** channel to use this command.");
    }
}

module.exports.help = {
    name: "booru"
}