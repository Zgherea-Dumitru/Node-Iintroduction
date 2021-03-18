const message = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
	text : message(),
	e : "oO",
	T : "U "
}));

