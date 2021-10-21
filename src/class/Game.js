const Colony = require('./Colony')
const Terminal = require('./Terminal')
const colonists = require('../Gen/Colonist')
class Game {
  constructor() {
    this.colony = new Colony()
    //this.terminal = new Terminal()
    this.colonist = []
  }

  run(){
    colonists.generate(5)
  }
}

module.exports = Game
