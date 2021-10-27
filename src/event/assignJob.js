module.exports = {
  name: 'assignJob',
  func: async (game,colon,job) => {
    //assigne et désassigne un job sur un colon
    if(!colon.tasks.includes(job)){
      colon.tasks.push(job); // ajoute le job
      let data = game.colony.callColony // prend la colonie
      Object.assign(data.colons[colon.name],colon) // ecrase l'ancienne sauvegarde du colon par la nouvelle
      game.emit('colonist',colon,{clearTerminal:true})
    }else {
      colon.tasks.splice(colon.tasks.indexOf(job), 1) // enleve le job
      let data = game.colony.callColony
      Object.assign(data.colons[colon.name],colon)
      game.emit('colonist',colon,{clearTerminal:true})
    }



  }
}
