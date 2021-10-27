module.exports = {
  name: 'assignJob',
  func: async (game,colon,job) => {
    if(!colon.tasks.includes(job)){
      colon.tasks.push(job);
      let data = game.colony.callColony
      Object.assign(data.colons[colon.name],colon)
      game.emit('colonist',colon,{clearTerminal:true})
    }else {

      colon.tasks.splice(colon.tasks.indexOf(job), 1)
      let data = game.colony.callColony
      Object.assign(data.colons[colon.name],colon)
      game.emit('colonist',colon,{clearTerminal:true})
    }



  }
}
