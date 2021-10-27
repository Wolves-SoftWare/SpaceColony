class Colony {
  constructor() {
    this.colonyData = require('../data/game/game.json')
    this.colon ={}
  }

  /**
   * retourne la colonie
   * @returns {Colony}
   */
  get callColony() {
    return this.colonyData
  }

  /**
   * Retourne le colon en cache
   * @returns {Colon}
   */
  get getColon(){
    return this.colon

  }

  /**
   * Met un colon en cache
   * @param colon Le colon
   */

  setColon(colon){
    this.colon = colon
  }

}

module.exports = Colony
