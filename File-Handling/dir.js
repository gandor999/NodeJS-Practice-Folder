const fs = require('fs');

// Making a new folder
// fs.mkdir('./new', (err) => {
// 	if (err) throw err;

// 	console.log('Directory created')
// })


// Checking if there is existing folder and if not create one
if (!fs.existsSync('./new')){
	fs.mkdir('./new', (err) => {
		if (err) throw err;

		console.log('Directory created')
	})
} else {
	console.log('Folder already exists')
}


// Remove folder
if (fs.existsSync('./new')){
	fs.rmdir('./new', (err) => {
		if (err) throw err;

		console.log('Directory removed')
	})
} else {
	console.log('Folder does not exists')
}