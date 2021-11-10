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
    this.saveSystem = require('../Gen/Save')
    this.utils = require('../Utils/Utils')
    this.terminal.on( 'key' , function( name , matches , data ) {
      if ( name === 'CTRL_C' ) { // si on tape ctrl + c ca quite le jeux
        setTimeout( function() { process.exit() } , 100 ) ;
      }
    });
  }

  async startGame(){ // lanceur
    this.saveSystem.makeSave(3) // genere 3 colon
    this.events = await EventLoader(); // charge les event
    [...this.events.values()].map((event) => {
      this.on(event.name, (...args) => event.func(this, ...args));
    });
    this.emit('startGame',this) // lance le jeu
  }

  /**
   *
   * @param game le jeu
   * @param arr les boutons
   * @param options option du terminal
   * @returns {Promise<void>}
   */

  async menu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleLineMenu(arr, options, function(error, response) {
      game.emit('selected',response,options)
    })
  }
  /**
   *
   * @param game le jeu
   * @param arr les boutons
   * @param options option du terminal
   * @returns {Promise<void>}
   */
  async columnMenu(game,arr,options ={}){
    if(options.clearTerminal){
      this.terminal.clear()
    }
    await this.terminal.singleColumnMenu(arr, options, function(error, response) {
      game.emit('selected',response,options)
    })
  }
  /**
   *
   * @param game le jeu
   * @param arr les boutons
   * @param options option du terminal
   * @returns {Promise<void>}
   */
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
