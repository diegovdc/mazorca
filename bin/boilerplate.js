var ncp = require('ncp').ncp;

var boilerplate = function() {
	ncp('./node_modules/mazorca-core/core/mazorca-boilerplate/', './', function (err) {
	 if (err) {
	   return console.error(err);
	 }
	 console.log('mazorca has been installed!');
	});
}