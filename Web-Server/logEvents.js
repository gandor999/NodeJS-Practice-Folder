const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// Atoa ra ni ipakita ang pag export ug modules like functions such as pareha aning log Events. Ato ni e import sa index.js unya


// Kani na function kay mu try siyag paminaw ug naay ni log in dayun iyaha e appenFile ang info na ganahan natu e butang s log folder na gi himo sa mkdir

const logEvents = async(message, logName) => {
	const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
	const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
	console.log(logItem);
	try{

		// Ug way log folder kay himuon nato
		if(!fs.existsSync(path.join(__dirname, 'logs'))){
			await fsPromises.mkdir(path.join(__dirname, 'logs'));
		}

		// Atung e butang ang txt sa log folder
		await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
	} catch (err){
		console.error(err);
	}
}

module.exports = logEvents;