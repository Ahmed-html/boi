const ms = require("ms");

exports.run = async (client, message, args) => {
	// If the member doesn't have enough permissions
	if (
		!message.member.hasPermission("MANAGE_MESSAGES") &&
		!message.member.roles.cache.some(r => r.name === "Giveaways")
	) {
		return message.channel.send(
			":x: You need to have the manage messages permissions to reroll giveaways!"
		);
	}

	// If no message ID or giveaway name is specified
	if (!args[0]) {
		return message.channel.send(":x: You have to specify a valid message ID!");
	}

	// try to found the giveaway with prize then with ID
	const giveaway =
		// Search with giveaway prize
		client.giveawaysManager.giveaways.find(g => g.prize === args.join(" ")) ||
		// Search with giveaway ID
		client.giveawaysManager.giveaways.find(g => g.messageID === args[0]);

	// If no giveaway was found
	if (!giveaway) {
		return message.channel.send(
			`Unable to find a giveaway for \`${args.join(" ")}\`, RIP.`
		);
	}

	// Reroll the giveaway
	client.giveawaysManager
		.reroll(giveaway.messageID)
		.then(() => {
			// Success message
			message.channel.send(":white_check_mark: Giveaway rerolled!");
		})
		.catch(e => {
			if (
				e.startsWith(
					`:x: Giveaway with message ID ${giveaway.messageID} has not ended!`
				)
			) {
				message.channel.send(":x: This giveaway has not ended!");
			} else {
				console.error(e);
				message.channel.send(":x: An error occured.");
			}
		});
};

module.exports.help = {
	name: "greroll",
	description: "This command is used for rerolling giveaways.",
	usage: "!greroll <giveaway-message-ID>",
	accessableby: "Manage Messages",
	aliases: []
};
