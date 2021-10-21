class Colony {
  constructor() {
    this.colonyData = require('../data/game/game.json')
  }

  get callColony() {
    return this.colonyData
  }
}

module.exports = Colony
