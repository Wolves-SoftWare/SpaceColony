module.exports = {
  name: "selected",
  func: async (game,input) => {
    switch (input ) {
      case ('quit'):
        process.exit(0)
        break
      case ('start'):
        game.emit("launchGame")
    }
  }
}
