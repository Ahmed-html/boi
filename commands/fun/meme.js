const Discord = require("discord.js");
const request = require("request");

module.exports.run = (client, message, _args) => {
	try {
		// This is a command purely for memes
		request("https://some-random-api.ml/meme", (error, _response, body) => {
			if (error) {
				return message.channel
					.send(":x: An error has occurred fetching your meme!")
					.then(() => console.error(error.message));
			}

			const json = JSON.parse(body);
			const { id, image, caption, category } = json;

			const emb = new Discord.MessageEmbed();
			emb.setDescription(`${caption}`);
			emb.setColor("BLUE");
			emb.setImage(image);

			message.channel.send(emb);
		});
	} catch (e) {
		console.error(e.message);
	}
};

module.exports.help = {
	name: "meme",
	description: "This command is used for generating some cool memes.",
	usage: "!meme",
	accessableby: "Member",
	aliases: []
};
