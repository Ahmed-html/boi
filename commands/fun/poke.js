const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	if (!message.mentions.users.first())
		return message.reply("You need to mention someone!");
	if (message.mentions.users.first().id === "718115170798534656")
		return message.reply("No");
	if (message.mentions.users.first().id === "866334724778885130")
		return message.reply("Try poke me, see what happens.");
	const { body } = await superagent
		.get("https://nekos.life/api/v2/img/poke")
		.catch(e => {
			if (e) {
				message.channel.send(":x: An error occured");
				console.log(e);
			}
		});

	const embed = new Discord.MessageEmbed()
		.setColor("#3498DB")
		.setTitle(
			`${message.mentions.users.first().username}, you got poked by ${
				message.author.username
			}, personaly i wouldn't have it!`
		)
		.setImage(body.url)
	message.channel.send({ embed });
};

module.exports.help = {
	name: "poke",
	description: "This command is used for poke someone",
	usage: "!poke <mention>",
	accessableby: "Members",
	aliases: []
};
