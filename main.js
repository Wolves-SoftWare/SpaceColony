/*require('./src/Utils/prototype')
const Collection = require('./src/Utils/Collection')
global.Collection = Collection



const Game = require('./src/class/Game')
const game = new Game()
require('./src/class/eventLoader')(game)

game.startGame()*/

require('./src/Gen/Planet').generate().then(r => console.log(r))
