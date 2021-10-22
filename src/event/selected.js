module.exports = {
  name: 'selected',
  func: async (game,input) => {
    let colony = game.colony.callColony
    const colonistList = colony.colons.map(c => c.name)
    if(colonistList.includes(input.selectedText)){
      game.emit('colonist',colony.colons.filter(c => c.name === input.selectedText )[0])
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
      case 'Back':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
    }
  }
}
