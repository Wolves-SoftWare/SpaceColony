const EventManger = require('../class/Event')
const eventManager = new EventManger()
module.exports =(terminal) =>{
  terminal.on('selected',input =>{
    eventManager.emit('truv')
  })
}
