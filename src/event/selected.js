module.exports = {
  name: 'selected',
  func: async (game,input,options) => { // event de tous les input dans le jeux
    let colony = game.colony.callColony // appel la colonie
    const colonistList = Object.keys(colony.colons) // prend la liste des colon
    if(colonistList.includes(input.selectedText)){ // si l'input est egale a un nom de colon
      game.emit('colonist',colony.colons[input.selectedText])
    }
    let job = ['woodcutter','hunt','craft']
    if(job.includes(input.selectedText)){// si l'input est egale a un job
      game.emit('assignJob',game.colony.getColon,input.selectedText)
    }
    // tous les autre input
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
