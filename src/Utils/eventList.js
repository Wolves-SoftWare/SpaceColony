const EventManger = require('../class/Event')
const eventManager = new EventManger()
module.exports =(terminal) =>{
  terminal.on('selected',input =>{
    switch (input ) {
      case"quit":
        process.exit(0)
        break
      case "start":
        console.log('not implemented')
        break
    }
  })
}
