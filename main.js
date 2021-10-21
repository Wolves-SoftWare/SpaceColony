
const Collection = require('./src/Utils/Collection')
global.Collection = Collection



const Game = require('./src/class/Game')
const game = new Game()
game.run()
