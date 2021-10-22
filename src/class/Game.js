const EventLoader = require("./eventLoader");
const EventEmitter = require('events')
const fs = require("fs");
const Colony = require('./Colony')
const Menu = require('../Utils/Menu')
let launch = false
class Game extends EventEmitter{
  constructor() {
    super()

    this.colony = new Colony()
    this.terminal = require( 'terminal-kit' ).terminal
    this.terminalMenu = new Menu(this)
    this.terminal.on( 'key' , function( name , matches , data ) {
      if ( name === 'CTRL_C' ) {
        setTimeout( function() { process.exit() } , 100 ) ;
      }
    });
  }

  async startGame(){
    this.events = await EventLoader();
    [...this.events.values()].map((event) => {
      this.on(event.name, (...args) => event.func(this, ...args));
    });
    console.log(this.events)
    this.emit('startGame',this)
  }



  async menu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleLineMenu(arr, options, function(error, response) {
      game.emit('selected',response)
    })
  }
  async columnMenu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleColumnMenu(arr, options, function(error, response) {
      game.emit('selected',response)
    })
  }
}



module.exports = Game
