class Menu {
  constructor(game) {
    this.game = game // Le jeu
    this.option = {                                         //
      style: this.game.terminal.inverse ,                   // Option par defaut
      selectedStyle: this.game.terminal.dim.white.bgBlue    //
    }
  }

  async primaryMenu(options = {}){
    Object.assign(options,this.option)// Ajout les option dans la fonction au option par défaut
    await this.game.menu(this.game, ['Building', 'Colonist', 'Research','Ressources','End Turn','Quit Game'],options) // fait un menu
  }
  async colonSummary(colon, options = {}){
    Object.assign(options,this.option) // Ajout les option dans la fonction au option par défaut
    const skills = Object.keys(colon.skill)
    let skillSTR =''
    let relaSTR = ''
    let taskSTR = ''
    /*
      \n  = saut de ligne
      \t = une tabulation
    */
    this.game.terminal('\n\n') // Saut 2 ligne
    // Ajout les donné pour chaque catégorie
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

    // Ajout des categorie dans le terminal
    this.game.terminal('Skill')
    this.game.terminal(skillSTR)
    this.game.terminal('\n\n')
    this.game.terminal('Relation')
    this.game.terminal(relaSTR)
    this.game.terminal('\n\n')
    this.game.terminal('Task')
    this.game.terminal(taskSTR)
    this.game.terminal('\n\n')

    this.game.colony.setColon(colon) // Assigne le colon sélectionné pour le recup plus facilement
    await this.game.menu(this.game, ['Back To Colonist Menu','Assignment'],options)
  }
  async ColonistMenu(options = {}){
    Object.assign(options,this.option)// Ajout les option dans la fonction au option par défaut

    const colony = this.game.colony.callColony // Prend les donnée de la colonie
    const colonistList = Object.keys(colony.colons) // Prend toutes les keys de l'objet et les met en Arrays
    colonistList.push('Back To Main Menu') // ajout le menu de retour
    await this.game.menu(this.game, colonistList,options) // fait un menu

  }
  async assignJob(options = {}){
    let job = ['woodcutter','hunt','craft'] // Les job disponible
    await this.game.menu(this.game, job,options) // fait un menu
  }

}

module.exports = Menu // Exporte la class Menu
