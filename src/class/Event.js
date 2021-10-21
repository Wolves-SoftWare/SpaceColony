const EventEmitter = require('events')
const fs = require("fs");

class Event extends EventEmitter {
  constructor() {
    super();
    this.events = new Collection()
    fs.readdir("./src/event/", async (err, files) => {
      if (err) console.log(err);
      let jsfiles = files.filter(file => file.split(".").pop() === "js")
      jsfiles.forEach(file => {
        let pull = require(`../event/${file}`);
        this.events.set(pull.name, pull);
      });
      await this.initEvent()

    });

  }

  initEvent(){
    this.events.each(evt =>{
      let pull = require(`../event/${evt.name}.js`);
      super.on(evt.name, (...args) => pull.run(...args))
      delete require.cache[require.resolve(`../event/${evt.name}.js`)];
    })
  }

  get event(){
    return this.events
  }
}


module.exports = Event
