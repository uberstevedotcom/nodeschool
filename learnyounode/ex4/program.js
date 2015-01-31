var fs = require('fs');

if (process.argv.length == 3) {
	var fileName = process.argv[2];

	fs.readFile(fileName, function (err, data) {
		if (err) {
			console.log('An error occurred.');
			throw err;
		}
		
		var fileContents = data.toString();

		var lines = fileContents.split('\n');
		if (lines.length > 0) {
			console.log(lines.length - 1);
			return;
		}
	});
}
else {
	console.log(0);
}