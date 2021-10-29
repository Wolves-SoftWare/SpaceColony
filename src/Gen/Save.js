const ColonistGen = require('./Colonist')
const PlanetGen = require('./Planet')

const fs = require('fs/promises');

module.exports = {
  makeSave(colonistNumber){
      const gameData = {
          colons: {},
          building:{},
          storage:{},
          research:{},
          planet:{},
          info:{
              turn:0
          }}
      ColonistGen.generate(colonistNumber).then((data) =>{
          ColonistGen.generateSocial(data).then((buildedData) =>{
              Object.assign(gameData.colons,buildedData)
          })
      })
      console.log(PlanetGen.generate())
      return
       fs.writeFile('./src/data/game/game.json', JSON.stringify(gameData,null,2)) // on enregistre dans le JSON et on le format


  }
}