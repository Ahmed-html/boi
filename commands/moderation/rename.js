const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
	const newname = args.slice(1).join(" ");
	let user;
	const mention = message.mentions.users.first();
	if (!mention) {
		user = message.guilds.members.get(args[0]);
		if (!user) {
			return message
				.reply(
					"You must give me a Valid userID for me to rename them!"
				)
				.catch(console.error);
		}
	} else {
		user = message.guild.member(mention);
	}

	try {
		user.setNickname(newname);
	} catch (e) {
		const embed = new Discord.MessageEmbed()
		.setColor("BLUE")
		.setDescription(
			`:x: An error occurred.`
		);
		message.channel.send(embed3);
	}
	const embed = new Discord.MessageEmbed()
	.setColor("BLUE")
	.setDescription(
		`:white_check_mark: **Nickname has been set!**`
	);
	message.channel.send(embed);
};

module.exports.help = {
	name: "rename",
	description: "This command is used for renaming someone's nickname.",
	usage: "!rename <mentions> <nickname>",
	accessableby: "Manage Nicknames",
	aliases: []
};
