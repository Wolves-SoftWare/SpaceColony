const EventManger = require('../src/class/Event')
const eventManager = new EventManger()
module.exports =(terminal) =>{
  terminal.on('selected',input =>{
    // Gere les event du terminal (Menu principal)
    switch (input ) {
      case'quit':
        process.exit(0)
        break
      case 'start':
        eventManager.emit('launchGame',eventManager.callGame) // lance le jeux
        break
    }
  })
}
