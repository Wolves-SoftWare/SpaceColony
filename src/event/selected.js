module.exports = {
  name: "selected",
  func: async (game,input) => {
    switch (input.selectedText ) {
      case "Start Game":
        game.emit("launch")
        break
      case "Colonist":
        await game.terminalMenu.ColonistMenu()
        break
    }
  }
}
