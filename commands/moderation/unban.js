const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	const embed2 = new Discord.MessageEmbed()
		.setDescription(
			`:x: Missing user ID!`
		)
		.setColor("RED");

	if (!args[0]) return message.channel.send(embed2);
	if (!client.users.cache.find(user => user.id === args[0]))
		return message.channel.send(embed2);
	const member = await client.users.fetch(args[0]);
	const ban = await message.guild.fetchBans();

	const reason = args.slice(1).join(" ");

	const embed1 = new Discord.MessageEmbed()
		.setDescription(`:x: The user you entered has not been banned!`)
		.setColor("RED");

	const mmqembed = new Discord.MessageEmbed()
		.setDescription(
			`:x: ${message.author.username}, Missing Permission!`
		)
		.setColor("BLUE");
	if (!message.member.hasPermission("BAN_MEMBERS")) {
		return message.channel
			.send(mmqembed)
			.then(message => message.delete({ timeout: 5000 }));
	}

	if (!ban.get(member.id))
		return message.channel.send(embed1).then(m => m.delete({ timeout: 15000 }));
	const username = `${client.users.cache.get(args[0]).username}#${
		client.users.cache.get(args[0]).discriminator
	}`;
	const EMDDD = new Discord.MessageEmbed()
		.setDescription(`:white_check_mark: Unbanned **${username}**`)
		.setColor("BLUE");
	return message.guild.members.unban(member).then(message.channel.send(EMDDD));
};

module.exports.help = {
	name: "unban",
	description: "This command is used for unbanning someone",
	usage: "!unban <user id>",
	accessableby: "Ban Members",
	aliases: []
};
