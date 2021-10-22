module.exports = {
  name: 'selected',
  func: async (game,input) => {
    switch (input.selectedText ) {
      case 'Start Game':
        game.emit('launch')
        break
      case 'Colonist':
        await game.terminalMenu.ColonistMenu()
        break
      case 'Building':
        break
      case 'Research':
        break
      case 'Ressources':
        break
      case 'Back':
        await game.terminalMenu.primaryMenu({clearTerminal: true})
    }
  }
}
