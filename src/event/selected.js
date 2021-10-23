module.exports = {
  name: 'selected',
  func: async (game,input) => {
    let colony = game.colony.callColony
    const colonistList = Object.keys(colony.colons).map(c => c.name)
    if(colonistList.includes(input.selectedText)){
      game.emit('colonist',colony.colons.filter(c => c.name === input.selectedText )[0])
    }
    let job = ['woodcutter','hunt','craft']
    if(job.includes(input.selectedText)){
      game.emit('assignJob',game.colony.getColon,input.selectedText)
    }
    switch (input.selectedText ) {
      case 'Start Game':
        game.emit('launch')
        break
      case 'Colonist':
        await game.terminalMenu.ColonistMenu()
        break
      case 'Building':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
      case 'Research':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
      case 'Ressources':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
      case 'Assign':
        await game.terminalMenu.assignJob()
        break

      case 'Back':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
    }
  }
}
