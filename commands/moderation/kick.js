const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, msg, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(`:x: I don't have permission to kick people!`)
		.setColor("RED");
	if (!msg.guild.member(client.user).hasPermission("KICK_MEMBERS"))
		return msg.channel.send(notice3).then(m => m.delete({ timeout: 5000 }));
	const kickusermentioned = msg.mentions.users.first();
	const kickTaged =
		kickusermentioned ||
		(args[0]
			? args[0].length == 18
				? msg.guild.members.cache.get(args[0]).user
				: false
			: false);
	let reason = args.slice(1).join(" ");
	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`:x: ${msg.author.username}, Missing Permission!`
		)
		.setColor("RED");
	if (!msg.member.hasPermission("KICK_MEMBERS"))
		return msg.channel.send(embed6).then(m => m.delete({ timeout: 5000 }));
	const mmqembed = new Discord.MessageEmbed()
		.setTitle("Command: !kick")
		.setDescription("Usage: !kick @user reason")
		.setColor("RED");
	if (!kickTaged) {
		return msg.channel.send(mmqembed).then(m => m.delete({ timeout: 5000 }));
	}

	const dsfdsfsdf = new Discord.MessageEmbed()
		.setDescription(
			`:x: Access Denied, that member has roles higher or equal to you!`
		)
		.setColor("RED");
	const sdfsdfsdfsd = new Discord.MessageEmbed()
		.setDescription(
			`:x: Access Denied, that member has roles higher or equal to me!`
		)
		.setColor("RED");
	const notice2 = new Discord.MessageEmbed()
		.setDescription(`:x: You cannot kick yourself!`)
		.setColor("RED");
	if (msg.author.id === kickTaged.id) return msg.channel.send(notice2);
	const botRolePossition = msg.guild.member(client.user).roles.highest.position;
	const rolePosition = msg.guild.member(kickTaged).roles.highest.position;
	const userRolePossition = msg.member.roles.highest.position;
	if (userRolePossition <= rolePosition) return msg.channel.send(dsfdsfsdf);
	if (botRolePossition <= rolePosition) return msg.channel.send(sdfsdfsdfsd);

	const sdfdfsdfsdfdfs = new Discord.MessageEmbed()
		.setDescription(
			`:x: An error occurred while banning that member, ban them manualy for now, the problem should be resolved shortly.`
		)
		.setColor("RED");

	if (!msg.guild.member(kickTaged).kickable) {
		return msg.channel.send(sdfdfsdfsdfdfs);
	}

	if (reason.length < 1) reason = "No reason given.";

	const kickEmbed = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle("Action Kick")
		.addField("Target", `**<@${kickTaged.id}> **`)
		.addField("User", `<@${msg.author.id}>`)
		.addField("Reason", `\`\`\`${reason}\`\`\``)
		.setTimestamp();

	const suembed = new Discord.MessageEmbed()
		.setDescription(
			`:white_check_mark: Kicked **${kickTaged.username}#${kickTaged.discriminator}** | **${reason}**`
		)
		.setColor("BLUE");

	msg.delete();
	msg.channel.send(suembed);
	msg.guild.member(kickTaged).kick(reason);

	kickTaged.send(`You have been kicked in **${msg.guild.name}**, ${reason}`);
};

module.exports.help = {
	name: "kick",
	description:
		"This command is used for kicking people u hates.",
	usage: "!kick <mentions> <reason>",
	accessableby: "Kick Members",
	aliases: []
};
