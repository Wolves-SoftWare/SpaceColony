class Entity{
  constructor() {
    this.items = require('../data/assets/items.json')
    this.faune = require('../data/assets/faune.json')

  }

  getItem(name){
    if(!name) return 'Pas d\'item trouvé'
    if(!this.items[name]) return 'Pas d\'item trouvé'
    return this.items[name]
  }

  getFaune(name){
    if(!name) return 'Pas d\'annimaux trouvé'
    if(!this.faune[name]) return 'Pas d\'annimaux trouvé'
    return this.faune[name]
  }
}

module.exports = Entity
