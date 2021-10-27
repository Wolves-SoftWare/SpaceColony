module.exports = {
  name: 'startGame',
  func: async (game) => {
    await game.menu(game,['Start Game', 'Quit Game'],{clearTerminal: true})// fait un menu et clear le terminal
  }
}
