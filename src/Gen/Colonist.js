const fs = require('fs/promises');
module.exports = {
  generate(size) {
    let colonists = {}

    for ( let i = 0 ; i < size ; i++ ) {
      let type = this.generateType() // choisie entre et femme et son nom

      Object.assign(colonists,{
        [type.name]:{
          name:type.name,
          gender: type.gender,
          skill: this.generateSkill(),// on genere les skill
          social: [],
          tasks:[],
        }
      }) // Ajoute le colon dans l'objet
    }

    //Pour tous les colon créer on fait le social entre eux
    for ( const colon of Object.keys(colonists) ) {
      this.generateSocial(colonists[colon],colonists)
    }
    // on construit les donnée
    let data = {
      colons: colonists, // on met les colon
      building:{},
      ressource:{},
      research:{},
      info:{
        turn:0
      }
    }
    fs.writeFile('./src/data/game/game.json', JSON.stringify(data,null,2)) // on enregistre dans le JSON et on le format
  },

  generateType(){
    let {male,female} = require('../data/assets/name.json') //recupere les noms homme et femme
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
    //calcul des points
    let skillLvl = require('../Utils/Utils').choice( [1,2,3,4,5,6 ,7 ,8 ,9,10,11,12,13,14,15,16,17,18,19,20],[7,7,7,8,10,15,12,12,9 ,7 ,6 ,5 ,4, 4 ,3 ,2 ,2 ,1, 1] )
    let interest =  require('../Utils/Utils').choice( [0,1,2],[20,7,1],{allowZero:false} )
    let modificator = interest === 1 ? 1.4 : interest === 2 ? 1.5 : 1
    let xp = parseInt((skillLvl*1000 + (skillLvl-1)*200)/modificator) //calcule de l'xp en fonction de l'intérêt et du niveau de la personne

    //retourne les valeur
    return{
      skillLvl,
      interest,
      xp
    }
  },

  generateSocial(colon, colonList){
    let chance = Math.floor(Math.random() * 10)+1
    if(chance){
      let list = Object.keys(colonList) // prend les nom des colon
      let colon2 = list.filter(c => c !== colon.name)[Math.floor(Math.random() * list.length)] // filtre le colon ou le social est généré
      let point = Math.floor(Math.random() * 125) -75 // choisie une valeur entre -75 et 75
      if(!colonList[colon2]) return // random error

      //l'ajout au deux colon
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
