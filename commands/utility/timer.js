const Discord = module.require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
	const Timer = args[0];
	if (isNaN(Timer))
		return message.reply(":x: Enter a valid time!");
	if (ms(Timer) > 2147483647)
		return message.reply(
			":x: Enter a number lower than 2147483647!"
		);
	if (ms(Timer) < 1) return message.reply(":x: Enter an number larger that 1!");

	if (!args[0]) {
		return message.channel.send(
			":x: " + '| Enter a time period followed by "s or m or h!"'
		);
	}

	if (args[0] <= 0) {
		return message.channel.send(
			":x: " + '| Enter a time period followed by "s or m or h!"'
		);
	}

	message.channel.send(
		":white_check_mark: " +
			"| Timer Started for: " +
			`${ms(ms(Timer), { long: true })}`
	);

	setTimeout(() => {
		message.channel.send(
			`${message.author.toString()} The Timer Has FINISHED!, it lasted: ${ms(
				ms(Timer),
				{ long: true }
			)}`
		);
	}, ms(Timer));
};

module.exports.help = {
	name: "timer",
	description: "This command is used for timing.",
	usage: "!timer <duration in s>",
	accessableby: "Member",
	aliases: []
};
