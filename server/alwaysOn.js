const fetch = require("node-fetch");
function alwaysOn() {
	setInterval(async () => {
		await fetch("http://localhost:1001").then(console.log("Pinged!"));
	}, 240000);
}

module.exports = alwaysOn;
