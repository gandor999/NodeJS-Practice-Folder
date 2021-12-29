
const fs = require('fs');
const path = require('path');


// Practice on simple CRUD operation for file system in node.js



// reads the content of a file, murag katong sa c++ na fs gihapon
fs.readFile('./Content.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data + ' >> read using hard code for pathname')
})


// Better for when writing on other platforms
fs.readFile(path.join(__dirname, 'Content.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data + ' >> read using path.join')
})


// Create operation
fs.writeFile(path.join(__dirname, 'New-Content.txt'), 'This is new content', (err) => {
	if (err) throw err;
	console.log('Create operation complete')
	// Overwrites content with this content if naay existing file
})


// Update operation
fs.appendFile(path.join(__dirname, 'New-Content.txt'), `\n\nThis is added content`, (err) => {
	if (err) throw err;
	console.log('Update operation complete')

	// Will also create a new file if the file specified does not exist
	// If ma observe nimo kay dili siya mu append pa ug one more line everytime na mu save ta sa server.js na file
	// Tungod ra ni kay gi call pa gyapon ang writeFile na methos which in turn iya ra pud e overwrite perminte ang existing file na New-Content kada save. For this to actually append kay ang mas maayung buhaton is call appendFile method lang instead sa writeFile kung mu create ug bago na file harun matic na next save point mu append siya sa bago na content.
	// Ang appendFile kay mu create ra siyag new file if dili existing ang specified file.
})



// Delete Operation
// fs.unlink(path.join(__dirname, 'New-Content.txt'), err => {
// 	if (err) throw err;
// 	console.log('Delete complete')
// })



// Shows the asynchornous nature of node.js
console.log('Test for Asynchronus')



// exit on uncaught errors
process.on('uncaughtException', err => {
	console.error(`There was an uncaught error: ${err}`);
	process.exit(1);
})


// Add comment for practice git revert

