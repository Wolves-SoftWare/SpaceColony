let interrestRemain = 2
let skillRemain = 2
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
    interrestRemain = 2
    skillRemain = 2
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
    let skill = Math.floor(Math.random() * 20) + 1
    let interest = Math.floor(Math.random() * 3)
    let xp = (skill*1000)


    //Skill nerf
    if(skillRemain !== 0){
      if(skill > 10){
        skillRemain--
      }else {
        skill =Math.floor(Math.random() * 9) + 1
        xp = (skill*1000)
      }
    }else {
      skill =Math.floor(Math.random() * 9) + 1
      xp = (skill*1000)
    }

    //Interest Nerf
    if(interrestRemain !== 0) {
      if ( interest === 2 ) {
        interrestRemain--
      } else {
        interest = Math.floor(Math.random() * 2)
      }
    } else {
      interest = Math.floor(Math.random() * 2)
    }

    return{
      skill,
      interest,
      xp
    }
  },

  generateSocial(colon, colonList){
    let chance = Math.floor(Math.random() * 10)+1
    console.log(chance,colonList);
    if(chance === 10){
      let list = Object.keys(colonList)
      let colon2 = list.filter(c => c !== colon.name)[Math.floor(Math.random() * list.length)]
      let point = Math.floor(Math.random() * 125) -75
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
