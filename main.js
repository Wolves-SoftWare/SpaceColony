require('./src/Utils/prototype')
const Collection = require('./src/Utils/Collection')
global.Collection = Collection



const Game = require('./src/class/Game')
const game = new Game()
require('./src/class/eventLoader')(game)

//game.startGame()
require('./src/Utils/Utils').choice([1,2,5],[[14,15,16]],{arrayData:true})
