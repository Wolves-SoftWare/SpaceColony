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
    await this.game.menu(this.game, ['Building', 'Colonist', 'Research','Ressources','End Turn'],options)
  }
  async colonSummary(colon, options = {}){
    Object.assign(options,this.option)
    const skills = Object.keys(colon.skill)
    let skillSTR =''
    let relaSTR = ''
    let taskSTR = ''
    this.game.terminal('\n\n')
    for(const skill of skills){
      skillSTR +=`\n\t${skill}: ${colon.skill[skill].skill}`
    }
    for(const relation of colon.social){
      if(!relation) return
      relaSTR +=`\n\t${relation.name}: ${relation.point}`
    }
    for(const task of colon.tasks){
      if(!task) return
      taskSTR +=`\n\t${task}`
    }
    this.game.terminal('Skill')
    this.game.terminal(skillSTR)
    this.game.terminal('\n\n')
    this.game.terminal('Relation')
    this.game.terminal(relaSTR)
    this.game.terminal('\n\n')
    this.game.terminal('Task')
    this.game.terminal(taskSTR)
    this.game.terminal('\n\n')
    this.game.colony.setColon(colon)
    await this.game.menu(this.game, ['Back','Assign'],options)
  }
  async ColonistMenu(options = {}){
    Object.assign(options,this.option)

    const colony = this.game.colony.callColony
    const colonistList = Object.keys(colony.colons)
    colonistList.push('Back')
    await this.game.menu(this.game, colonistList,options)

  }
  async assignJob(options = {}){
    let colon = this.game.colony.getColon
    let job = ['woodcutter','hunt','craft']
    await this.game.menu(this.game, job,options)
    return colon
  }
}

module.exports = Menu
