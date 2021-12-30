// This is to handle large files

const fs = require('fs');

const rs = fs.createReadStream('./Content.txt', { ecncoding: 'utf8' });

const ws = fs.createWriteStream('./New-Content3.txt');

// rs.on('data', (dataChunk) => {
// 	ws.write(dataChunk);
// })

rs.pipe(ws);