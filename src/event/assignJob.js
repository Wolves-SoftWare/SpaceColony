module.exports = {
  name: 'assignJob',
  func: async (game,colon,job) => {
    colon.tasks.push(job);

    let data = game.colony.callColony
    Object.assign(data.colons[colon.name],colon)
    game.emit('colonist',colon,{clearTerminal:true})

  }
}
