const express = require("express");
const server = express();
server.all("/", (req, res) => {
	res.send("Bot is alive!");
});

function keepAlive() {
	server.listen(1001, () => {
		console.log("Server is Ready!");
	});
}

module.exports = keepAlive;
