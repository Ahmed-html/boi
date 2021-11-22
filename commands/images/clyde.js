const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			":x: Type the text you want to clyde!"
		)
		.setColor("RED");
	const mindtxt = args.slice(0).join(" ");
	if (!mindtxt)
		return message.channel
			.send(notice3)
			.then(msg => msg.delete({ timeout: 10000 }));

	const image = await canvacord.Canvas.clyde(mindtxt);

	const triggered = new Discord.MessageAttachment(image, "clyde.png");

	message.channel.send(triggered);
};

module.exports.help = {
	name: "clyde",
	description: "Acts like clyde",
	usage: "!clyde <text>",
	accessableby: "Member",
	aliases: []
};
