const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			":x: Type the text you want to changemymind!"
		)
		.setColor("RED");
	const mindtxt = args.slice(0).join(" ");
	if (!mindtxt) {
		return message.channel
			.send(notice3)
			.then(msg => msg.delete({ timeout: 10000 }));
	}

	const image = await canvacord.Canvas.changemymind(mindtxt);

	const triggered = new Discord.MessageAttachment(image, "changemymind.png");

	message.channel.send(triggered);
};

module.exports.help = {
	name: "changemymind",
	description: "Generates a change my mind meme.",
	usage: "!changemymind <text>(optional)",
	accessableby: "Member",
	aliases: []
};
