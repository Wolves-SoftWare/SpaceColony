module.exports = {
  generate(size){
    let colonists =[]

    for(let i = 0; i<size;i++){
      let type = this.generateType()

      colonists.push({
        name:type.name,
        gender:type.gender,
        skill:this.generateSkill(),
        social:[]

      })
    }
    for(const colon of colonists){
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
    return {
      farming: this.generatePoints(),
      extract: this.generatePoints(),
      build: this.generatePoints(),
      hunting: this.generatePoints(),
      diplomat: this.generatePoints(),
      craft: this.generatePoints()
    }
  },
  generatePoints(){
    let skill = Math.floor(Math.random() * 6) + 1
    let interest = Math.floor(Math.random() * 3)
    let xp = (skill*1000)
    return{
      skill,
      interest,
      xp
    }
  },

  generateSocial(){

  }
}
