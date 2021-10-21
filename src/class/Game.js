const Colony = require('./Colony')
const Terminal = require('./Terminal')
const colonists = require('../Gen/Colonist')
const Event = require('./Event')
const {EventEmitter} = require('events')
const fs = require("fs");
class Game extends EventEmitter{
  constructor() {
    super();
    this.colony = new Colony()
    this.eventManager = new Event(this)
    this.events = new Collection()
    this.terminal = new Terminal()


  }

  async run(){
    //colonists.generate(5)
    setTimeout(() => {
      this.eventManager.emit('startGame',this)

    },2000)
  }


}

module.exports = Game
