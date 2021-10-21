class Colony {
  constructor() {
    this.colonyData = require('../data/game/game.json')
  }

  get colony() {
    return this.colonyData
  }
}

module.exports = Colony
