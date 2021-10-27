module.exports = {
  name: 'launch',
  func: async (game,input) => {
    await game.terminalMenu.primaryMenu({clearTerminal: true}) // fait un menu et clear le terminal
  }
}
