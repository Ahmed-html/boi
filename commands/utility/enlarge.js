const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports.run = async (client, message, args) => {
	const emoji = args[0];
	if (!emoji) return message.channel.send(":x: No emoji provided!");

	const custom = Discord.Util.parseEmoji(emoji);
	const embed = new Discord.MessageEmbed()
		.setTitle(`Enlarged:`)
		.setColor("BLUE");

	if (custom.id) {
		embed.setImage(
			`https://cdn.discordapp.com/emojis/${custom.id}.${
				custom.animated ? "gif" : "png"
			}`
		);
		return message.channel.send(embed);
	}
	const parsed = parse(emoji, { assetType: "png" });
	if (!parsed[0]) return message.channel.send(":x: Invalid emoji!");

	embed.setImage(parsed[0].url);
	return message.channel.send(embed);
};

module.exports.help = {
	name: "enlarge",
	description: "This command is used for enlarging some emoji from everywhere",
	usage: "!enlarge <emoji/s>",
	accessableby: "Memeber",
	aliases: []
};
