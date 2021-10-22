const fs = require("fs").promises;
const { resolve } = require("path");

module.exports = async function EventLoader() {
  const files = await fs.readdir(resolve("src/event"));
  const events = new Map();
  for await (const file of files) {
    console.log(files,file)
    const event = require("../event/"+file);
    events.set(event.name, event);
  }
  return events;
};
