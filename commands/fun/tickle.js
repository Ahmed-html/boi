const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	if (!message.mentions.users.first())
		return message.reply("You need to mention someone to tickle them!");
	if (message.mentions.users.first().id === "718115170798534656")
		return message.reply("No");
	if (message.mentions.users.first().id === "866334724778885130")
		return message.reply("Try tickle me, see what happens.");
	const { body } = await superagent.get("https://nekos.life/api/v2/img/tickle");

	const embed = new Discord.MessageEmbed()
		.setColor("#3498DB")
		.setTitle(
			`${message.mentions.users.first().username}, you got tickled by ${
				message.author.username
			}, personaly i wouldn't have it!`
		)
		.setImage(body.url)
	message.channel.send({ embed });
};

module.exports.help = {
	name: "tickle",
	description: "This command is used for generating tickle image.",
	usage: "!tickle <mention>",
	accessableby: "Member",
	aliases: []
};
