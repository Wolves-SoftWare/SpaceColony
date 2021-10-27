module.exports = {
  name: 'selected',
  func: async (game,input,options) => {
    let colony = game.colony.callColony
    const colonistList = Object.keys(colony.colons)
    if(colonistList.includes(input.selectedText)){
      game.emit('colonist',colony.colons[input.selectedText])
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
        await game.terminalMenu.ColonistMenu(options)
        break
      case 'Building':
        Object.assign(options,{clearTerminal: true} )
        await game.terminalMenu.primaryMenu(options)
        break
      case 'Research':
        Object.assign(options,{clearTerminal: true} )

        await game.terminalMenu.primaryMenu(options)
        break
      case 'Ressources':
        Object.assign(options,{clearTerminal: true} )

        await game.terminalMenu.primaryMenu(options)
        break
      case 'End Turn':
        Object.assign(options,{clearTerminal: true} )
        game.emit('endturn',game.colony.callColony)

        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break

      case 'Assign':
        await game.terminalMenu.assignJob(options)
        break
      case 'Back To Main Menu':
        Object.assign(options,{clearTerminal: true} )

        await game.terminalMenu.primaryMenu({clearTerminal: true})
        break
      case 'Back To Colonist Menu':
        await game.terminalMenu.ColonistMenu({clearTerminal: true})
        break
      case 'Quit Game':
        process.exit(0)
    }
  }
}
