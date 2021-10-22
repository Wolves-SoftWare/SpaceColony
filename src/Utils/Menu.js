class Menu {
  constructor(game) {
    this.game = game
    this.option = {
      style: this.game.terminal.inverse ,
      selectedStyle: this.game.terminal.dim.green.bgBlue
    }
  }

  async primaryMenu(options = {}){
    Object.assign(options,this.option)
    await this.game.menu(this.game, ['Building', 'Colonist', 'Research','Ressources'],options)
  }

  async ColonistMenu(options = {}){
    Object.assign(options,this.option)

    const colony = this.game.colony.callColony
    const colonistList = colony.colons.map(c => c.name)
    colonistList.push('Back')
    await this.game.menu(this.game, colonistList,options)
  }
}

module.exports = Menu
