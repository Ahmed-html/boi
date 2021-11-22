const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const bbb = new Discord.MessageEmbed()
	.setColor("#3498DB")
	.setDescription(
		`:ping_pong: pong 
		Message Latency: **${
			Date.now() - message.createdTimestamp
		}ms**\nDiscord API Latency: **${Math.round(client.ws.ping)}ms**`
		);
	
	message.channel.send(bbb);
};

module.exports.help = {
	name: "ping",
	description: "This command is used for pinging the bot.",
	usage: "!ping",
	accessableby: "Members",
	aliases: []
};
