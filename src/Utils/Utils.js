module.exports = {
  /**
   *
   * @param list {Array} An array of choices available
   * @param weights An array of weights
   */
  choice(list, weights) {
    if ( !weights.length ) return // Si weights et vide le programme s'arrete
    //crée deux nouvelle liste
    let newListweights = []
    let newList = []

    //Enleve 0 a la liste et a l'index de lautre liste
    weights.forEach(w => {
      const index = weights.indexOf(w)
      if ( w !== 0 ) {
        newListweights.push(w)
        newList.push(weights[index])
      }

    })

    let chance = []
    //Parcourt les element de la liste pour faire un string des probabilité
    for ( const elem of list ) {
      let index = list.indexOf(elem)
      let indice = weights[index]
      for ( let i = 0 ; i < indice ; i++ ) {
        chance.push(elem)
      }
    }
    return chance[Math.floor(Math.random() * chance.length)] // Choisi un Element au hasard de la liste de string
  }
}


