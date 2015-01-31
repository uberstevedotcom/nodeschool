var fs = require('fs');

if (process.argv.length > 2) {
	var fileName = process.argv[2];

	var buffer = fs.readFileSync(fileName);
	var fileContents = buffer.toString();

	var lines = fileContents.split('\n');
	if (lines.length > 0) {
		console.log(lines.length - 1);
		return;
	}
}

console.log(0);