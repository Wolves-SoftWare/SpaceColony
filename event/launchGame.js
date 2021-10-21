module.exports = {
  name: "launchGame",
  func: async (game) => {
    const colony = game.colony.callColony

    const colon = colony.colons.map(colon =>colon.name)
    console.log(colon)
    game.newTerm({
      question:"Space Colonie",
      options:colon
    })
    game.startTerminal()

  }
}
