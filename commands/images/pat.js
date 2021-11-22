const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.mentions.users.first().id === "718115170798534656")
		return message.reply("No");
	if (message.mentions.users.first().id === "866334724778885130")
		return message.reply("Try pat, me see what happens.");
	// eslint-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/pat", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} pats ${member.user.username}, personaly i wouldn't have it `)
						.setColor("#3498DB")
						.setImage(json.url);

					message.channel.send(embed);
				} else message.reply(":x: You need to mention the user to pat!");
			}
		);
	} catch (err) {
		message.channel.send(`An error occured\n${err}.`).catch();
	}
};

module.exports.help = {
	name: "pat",
	description: "This command is used for generating pat.",
	usage: "!pat <mention>",
	accessableby: "Members",
	aliases: []
};
