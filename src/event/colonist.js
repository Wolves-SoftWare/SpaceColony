module.exports = {
  name: 'colonist',
  func: async (game,colon) => {
    await game.terminalMenu.colonSummary(colon)
  }
}
