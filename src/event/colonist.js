module.exports = {
  name: 'colonist',
  func: async (game,colon,options) => {
    await game.terminalMenu.colonSummary(colon)
  }
}
