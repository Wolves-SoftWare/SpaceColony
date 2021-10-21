module.exports = {
  name: "startGame",
  func: async (game) => {
    game.newTerm({
      question:"Space Colonie",
      options:["Start","Quit"]
    })

    game.startTerminal()
  }
}
