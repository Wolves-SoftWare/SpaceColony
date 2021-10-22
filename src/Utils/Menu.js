class Menu {
  constructor(game) {
    this.game = game
    this.option = {
      style: this.game.terminal.inverse ,
      selectedStyle: this.game.terminal.dim.white.bgBlue
    }
  }

  async primaryMenu(options = {}){
    Object.assign(options,this.option)
    await this.game.menu(this.game, ['Building', 'Colonist', 'Research','Ressources'],options)
  }
  async colonSummary(colon, options = {}){
    Object.assign(options,this.option)
    const skills = Object.keys(colon.skill)
    let skillSTR =''
    let relaSTR = ''
    this.game.terminal('\n\n')
    for(const skill of skills){
      skillSTR +=`\n\t${skill}: ${colon.skill[skill].skill}`
    }
    for(const relation of colon.social){
      if(!relation) return
      relaSTR +=`\n\t${relation.name}: ${relation.point}`
    }
    this.game.terminal('Skill')

    this.game.terminal(skillSTR)
    this.game.terminal('\n\n')
    this.game.terminal('Relation')

    this.game.terminal(relaSTR)

    await this.game.menu(this.game, ['Back'],options)
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
