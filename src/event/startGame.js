module.exports = {
  name: "startGame",
  func: async (game) => {
    await game.menu(game,["Start Game", "Quit Game"],{clearTerminal: true})
  }
}
