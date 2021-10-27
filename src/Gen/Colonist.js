const fs = require('fs/promises');
module.exports = {
  generate(size) {
    let colonists = {}

    for ( let i = 0 ; i < size ; i++ ) {
      let type = this.generateType()

      Object.assign(colonists,{
        [type.name]:{
          name:type.name,
          gender: type.gender,
          skill: this.generateSkill(),
          social: [],
          tasks:[],
        }
      })
    }

    for ( const colon of Object.keys(colonists) ) {
      this.generateSocial(colonists[colon],colonists)
    }
    let data = {
      colons: colonists,
      building:{},
      ressource:{},
      research:{},
      info:{
        turn:0
      }
    }
    fs.writeFile('./src/data/game/game.json', JSON.stringify(data,null,2))
  },

  generateType(){
    let {male,female} = require('../data/assets/name.json')
    let gender = ['F','M']

    let selectGender = gender[ Math.floor(Math.random() * gender.length)]
    return {gender: selectGender,name: selectGender === 'M' ? male[ Math.floor(Math.random() * male.length)] : female[ Math.floor(Math.random() * female.length)] }
  },
  generateSkill(){
    return {
      farming: this.generatePoints(),
      extract: this.generatePoints(),
      build: this.generatePoints(),
      hunting: this.generatePoints(),
      diplomat: this.generatePoints(),
      craft: this.generatePoints(),
      medic: this.generatePoints(),
    }
  },
  generatePoints(){
    let interest = Math.floor(Math.random() * 3)

    //calcul des points
    let skillLvl = require('../Utils/Utils').choice( [1,2,3,4,5,6 ,7 ,8 ,9,10,11,12,13,14,15,16,17,18,19,20],[7,7,7,8,10,15,12,12,9 ,7 ,6 ,5 ,4, 4 ,3 ,2 ,2 ,1, 1] )
    interest =  require('../Utils/Utils').choice( [0,1,2],[20,7,1],{allowZero:false} )
    let modificator = interest === 1 ? 1.4 : interest === 2 ? 1.5 : 1
    let xp = parseInt(skillLvl*1000 + (skillLvl-1)*200/modificator)
    return{
      skillLvl,
      interest,
      xp
    }
  },

  generateSocial(colon, colonList){
    let chance = true
    if(chance){
      let list = Object.keys(colonList)
      let colon2 = list.filter(c => c !== colon.name)[Math.floor(Math.random() * list.length)]
      let point = Math.floor(Math.random() * 125) -75
      if(!colonList[colon2]) return // random error
      colon.social.push({
        name:colonList[colon2].name,
        point,
        relationFocus:null
      })
      colonList[colon2].social.push({
        name:colon.name,
        point,
        relationFocus:null
      })
    }
  }
}
