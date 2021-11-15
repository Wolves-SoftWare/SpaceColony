let json = require('./game.json')
const fs = require('fs/promises')

fs.writeFile('./game.json',JSON.stringify(json,null,2))
for(const j of json) console.log(j)
