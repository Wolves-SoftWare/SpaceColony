class Entity{
  constructor() {
    this.items = require('../data/assets/items.json')
  }

  getItem(name){
    if(!name) return 'Pas d\'item trouvé'
    if(!this.items[name]) return 'Pas d\'item trouvé'
    return this.items[name]
  }
}

module.exports = Entity
