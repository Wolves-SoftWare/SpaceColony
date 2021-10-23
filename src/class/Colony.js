class Colony {
  constructor() {
    this.colonyData = require('../data/game/game.json')
    this.colon ={}
  }

  get callColony() {
    return this.colonyData
  }

  get getColon(){
    return this.colon

  }

  setColon(colon){
    this.colon = colon
  }

}

module.exports = Colony
