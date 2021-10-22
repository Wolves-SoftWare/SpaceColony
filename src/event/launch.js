module.exports = {
  name: "launch",
  func: async (game,input) => {
    game.setLaunch(true)
    console.log(game.isLaunch)
    await game.terminalMenu.primaryMenu({clearTerminal:true})
  }
}
