module.exports = {
  name: 'colonist',
  func: async (game,colon,options) => {
    await game.terminalMenu.colonSummary(colon) // montre le menu du colon
  }
}
