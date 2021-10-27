/**
 * @param {Array<number>} L'array
 * @return {null|Number} Retourne la plus petite valeur
 */

Array.prototype.minimal = function () {
  if(!this.length) return null // si il y a pas de valeur on return null
  this.filter(function(item){ return isNaN(+item) }) // filtre toutes les valeurqui sont pas des chiffre
  if(!this.length) return null // si il y a plus de valeur on return null
  let min = this[0];
  for (let i = 1; i < this.length; ++i) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min
}

/**
 * Check si dans la l'array il y a meme valeur
 * @param array
 * @returns {{sameValue: boolean, value}|{sameValue: boolean, value: null}}
 */
Array.prototype.asSameValue = function(array) {
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(this[i] === array[j]) {
        return {sameValue: true, value:array[j]};
      }
    }
  }
  return {sameValue: false, value:null};
}
