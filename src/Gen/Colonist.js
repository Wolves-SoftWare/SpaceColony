let interrestRemain = 2
let skillRemain = 2
module.exports = {
  generate(size) {
    let colonists = []

    for ( let i = 0 ; i < size ; i++ ) {
      let type = this.generateType()

      colonists.push({
        name: type.name,
        gender: type.gender,
        skill: this.generateSkill(),
        social: []

      })
    }
    for ( const colon of colonists ) {
      this.generateSocial(colon, colonists)
      console.log(colon)

    }

  },

  generateType(){
    let {male,female} = require('../data/assets/name.json')
    let gender = ["F","M"]

    let selectGender = gender[ Math.floor(Math.random() * gender.length)]
    return {gender: selectGender,name: selectGender === "M" ? male[ Math.floor(Math.random() * male.length)] : female[ Math.floor(Math.random() * female.length)] }
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
    if(chance === 10){
      let colon2 = colonList[ Math.floor(Math.random() * colonList.length)]
      let point = Math.floor(Math.random() * 125) -75
      colon.social.push({
        name:colon2.name,
        point,
        relationFocus:null
      })
      colon2.social.push({
        name:colon.name,
        point,
        relationFocus:null
      })
    }
  }
}
