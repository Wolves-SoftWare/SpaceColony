module.exports = {
  /**
   *
   * @param list {Array} An array of choices available
   * @param weights An array of weights
   * @param options
   */
  choice(list, weights = [],options = {
    arrayData:false,
    getAll:false
  }) {


    if(options.arrayData){
      for(const elem of list){
        let index = list.indexOf(elem)
        if(!weights[index]){
          weights.push([1,1])
        }
      }

      let newListweights = []
      let newList = []

      weights.forEach(w => {
        const index = weights.indexOf(w)
        if ( w !== 0 ) {
          newListweights.push(w)
          newList.push(list[index])
        }
      })
      let chance = []
      //Parcourt les element de la liste pour faire un string des probabilité
      for ( const elem of newList ) {
        let index = newList.indexOf(elem)
        for ( let i = 0 ; i < newListweights[index][Math.floor(Math.random() * newListweights[index].length)] ; i++ ) {
          chance.push(elem)
        }
      }
      return options.getAll ? chance : chance[Math.floor(Math.random() * chance.length)] // Choisi un Element au hasard de la liste de string
    }else {
      for(const elem of list){
        let index = list.indexOf(elem)
        if(!weights[index]){
          weights.push(1)
        }
      }
      console.log(weights,list);
      //crée deux nouvelle liste
      let newListweights = []
      let newList = []

      //Enleve 0 a la liste et a l'index de lautre liste
      weights.forEach(w => {
        const index = weights.indexOf(w)
        if ( w !== 0 ) {
          newListweights.push(w)
          newList.push(list[index])
        }

      })

      let chance = []
      //Parcourt les element de la liste pour faire un string des probabilité
      for ( const elem of newList ) {
        let index = newList.indexOf(elem)
        let indice = !newListweights[index]? 1:newListweights[index]
        for ( let i = 0 ; i < indice ; i++ ) {
          chance.push(elem)
        }
      }
      return options.getAll ? chance : chance[Math.floor(Math.random() * chance.length)] // Choisi un Element au hasard de la liste de string
    }

  },

  capitalize (value) {
    const textArray = value.split(' ');
    let capitalizedText = '';
    for ( let i = 0 ; i < textArray.length ; i++ ) {
      capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' '
    }
    return capitalizedText.trim()
  }

}


