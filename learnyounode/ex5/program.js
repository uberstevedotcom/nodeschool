var fs = require('fs');
var path = require('path');

if (process.argv.length == 4) {
	var directory = process.argv[2];
	var extension = '.' + process.argv[3];

	fs.readdir(directory, function (err, fileNames) {
		if (err) {
			console.log('An error occurred.');
			throw err;
		}

/*		for (var i = 0; i < fileNames.length; i++) {
			if (path.extname(fileNames[i]) == extension) {
				console.log(fileNames[i]);
			}
		}*/
		fileNames.forEach(function(fileName){
			if (path.extname(fileName) == extension) {
				console.log(fileName);
			}
		});
	});
}