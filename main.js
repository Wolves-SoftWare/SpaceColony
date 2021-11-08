require('./src/Utils/prototype')
const Collection = require('./src/Utils/Collection')
global.Collection = Collection



const Game = require('./src/class/Game')
const game = new Game()
require('./src/class/eventLoader')(game)

//game.startGame()
console.log(require('./src/Utils/Utils').choice([1,2,5],[],{arrayData:true,getAll:true})
);
