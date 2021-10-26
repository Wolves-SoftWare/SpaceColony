const EventLoader = require("./eventLoader");
const EventEmitter = require('events')
const Colony = require('./Colony')
const Menu = require('../Utils/Menu')
class Game extends EventEmitter{
  constructor() {
    super()

    this.colony = new Colony()
    this.terminal = require( 'terminal-kit' ).terminal
    this.terminalMenu = new Menu(this)
    this.colonist = require('../Gen/Colonist')
    this.terminal.on( 'key' , function( name , matches , data ) {
      if ( name === 'CTRL_C' ) {
        setTimeout( function() { process.exit() } , 100 ) ;
      }
    });
  }

  async startGame(){
    this.colonist.generate(3)
    this.events = await EventLoader();
    [...this.events.values()].map((event) => {
      this.on(event.name, (...args) => event.func(this, ...args));
    });
    this.emit('startGame',this)
  }



  async menu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleLineMenu(arr, options, function(error, response) {
      game.emit('selected',response,options)
    })
  }
  async columnMenu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleColumnMenu(arr, options, function(error, response) {
      game.emit('selected',response,options)
    })
  }

  async gridMenu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.gridMenu(arr, options, function(error, response) {
      game.emit('selected',response,options)
    })
  }
}



module.exports = Game
