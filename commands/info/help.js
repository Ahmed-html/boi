const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArgs = args[0];

	if (!helpArgs) {
		const embed = new MessageEmbed()
			.setAuthor(
				`${client.user.username} Commands list`,
				client.user.displayAvatarURL()
			)
			.setColor("BLUE")
			.setDescription(
				`**My prefix: !**`
			)
			.addField("📱 **Basic**", "`help`, `ping`")
			.addField(
				"⚙ **utility**",
				"`avatar`, `channel`, `embed`, `roleinfo`, `reverse`, `setafk`, `timer`, `translate`, `whois`, `weather`"
			)
			.addField(
				"🎃 **Fun**",
				"`8ball`, `cat`, `meme`, `pat`, `poke`, `tickle`"
			)
			.addField(
				":tada: **Giveaways**",
				"`gstart`, `greroll`, `gend`"
			)
			.addField(
				":frame_photo: **Image**",
				"`captcha`, `circle`, `delete`, `changemymind`, `trigger`, `clyde`, `petpet`, `iphonex`"
			)
			.addField(
				"🛠️ **Moderation**",
				"`ban`, `clear`, `clearwarn`, `createchannel`, `createemoji`, `kick`, `lockchannel`, `mute`, `rename`, `slowmode`, `unban`, `unlockchannel`, `unmute`, `warn`, `warnings`"
			)
			.addField(":gear: **Custom Function**", "`setprefix`")
			.setFooter(
				`© ShvrkBait Workshop | This command requested by ${message.author.username}#${message.author.discriminator}`
			);
		return message.channel.send({ embed });
	};

	if (helpArgs) {
		//let command = helpArgs
			const command = client.commands.has(helpArgs) ? client.commands.get(helpArgs) : client.aliases.has(helpArgs) ? client.commands.get(client.aliases.get(helpArgs)) : null;
            if(!command) {
				const embeds = new MessageEmbed()
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");
			   return message.channel.send(embeds);
			};
			if (command.help.aliases < 1) alia = "No aliases";
			const embed = new MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("BLUE")
				.setFooter(
					`© ShvrkBait Workshop | This command was requested by ${message.author.username}#${message.author.discriminator}`
				);
			return message.channel.send(embed);
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: "!help",
	accessableby: "Members",
	aliases: []
};