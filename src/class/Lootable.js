class Lootable{
  constructor(){
    this.lootable = require('../data/assets/lootable.json')
  }

  getLootable(name){
    if(!name) return 'Pas de table de loot trouvé'
    if(!this.lootable[name]) return 'Pas de table de loot trouvé'
    return this.lootable[name]
  }
}

module.exports = Lootable
