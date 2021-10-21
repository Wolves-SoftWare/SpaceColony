module.exports ={
  name:"startGame",
  run: async (game) => {
    game.terminal.new({
      question:"Space Colonie",
      options:["Start","Quit"]
    })

    game.terminal.start()
  }
}
