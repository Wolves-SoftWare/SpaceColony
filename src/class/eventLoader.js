const fs = require('fs').promises;
const { resolve } = require('path');
 // charge tous les event du jeu
module.exports = async function EventLoader() {
  const files = await fs.readdir(resolve('src/event'));
  const events = new Map();
  for await (const file of files) {
    const event = require('../event/'+file);
    events.set(event.name, event);
  }
  return events;
};
