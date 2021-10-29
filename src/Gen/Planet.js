module.exports = {
  generate() {
    /**
     * TODO
     *  - Continue to gen planet (ressources, faune, flore)
     */
    return new Promise(function(resolve, reject) {
      let data ={
        name: require('../Utils/Utils').capitalize(require('../Gen/Planet').namegen(1)[0]),
        tier: 'dev',
        ressources:require('../Gen/Planet').generateRessource(),
        faune:["Golem de Bronze","Guenaudes","Donican","Horupine"]
      }
      console.log(data)
      resolve(data)
    })
  },

  generateRessource(){
    let ressourceMap = require('../Utils/Utils').choice(
            ['Fer','Charbon','Cuivre','Etain','Acier','Or','Plastacier','Titane'],
        [[14,15,16],[14,15],[12],[12],[9,10],[5,6],[3],[2]],{arrayData:true})
    console.log(ressourceMap);
    let ressourcesData = {}

    for(const ressources of ressourceMap){
      let filter = ressourceMap.filter(c => c === ressources).length
      Object.assign(ressourcesData,{
        [ressources]: ((filter*2)* Math.floor(1000)*1.6)
      })
    }
    return ressourcesData
  },

  tierSelector(number){
    switch (number ) {
      case 1:
        return {
          tier:1,
          ressources:['Cuivre','Etain','Charbon'],
          faune:["Golem de Bronze","Guenaudes","Donican","Horupine"]
        }
      case 2:
        return {
          tier:2,
          ressources:['Fer','Charbon','Acier','Or']
        }
      case 3:
        return {
          tier:3,
          ressources:['Plastacier','Acier','Or']
        }
      case 4:
        return {
          tier:3,
          ressources:['Titane','Plastacier','Or']
        }
    }
  },

  namegen(count) {
    const vowels = {
          '1': ['b',
            'c',
            'd',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'p',
            'q',
            'r',
            's',
            't',
            'v',
            'w',
            'x',
            'y',
            'z'],
          '2': ['a', 'e', 'o', 'u'],
          '3': ['br',
            'cr',
            'dr',
            'fr',
            'gr',
            'pr',
            'str',
            'tr',
            'bl',
            'cl',
            'fl',
            'gl',
            'pl',
            'sl',
            'sc',
            'sk',
            'sm',
            'sn',
            'sp',
            'st',
            'sw',
            'ch',
            'sh',
            'th',
            'wh'],
          '4': ['ae',
            'ai',
            'ao',
            'au',
            'a',
            'ay',
            'ea',
            'ei',
            'eo',
            'eu',
            'e',
            'ey',
            'ua',
            'ue',
            'ui',
            'uo',
            'u',
            'uy',
            'ia',
            'ie',
            'iu',
            'io',
            'iy',
            'oa',
            'oe',
            'ou',
            'oi',
            'o',
            'oy'],
          '5': ['turn',
            'ter',
            'nus',
            'rus',
            'tania',
            'hiri',
            'hines',
            'gawa',
            'nides',
            'carro',
            'rilia',
            'stea',
            'lia',
            'lea',
            'ria',
            'nov',
            'phus',
            'mia',
            'nerth',
            'wei',
            'ruta',
            'tov',
            'zuno',
            'vis',
            'lara',
            'nia',
            'liv',
            'tera',
            'gantu',
            'yama',
            'tune',
            'ter',
            'nus',
            'cury',
            'bos',
            'pra',
            'thea',
            'nope',
            'tis',
            'clite'],
          '6': ['una',
            'ion',
            'iea',
            'iri',
            'illes',
            'ides',
            'agua',
            'olla',
            'inda',
            'eshan',
            'oria',
            'ilia',
            'erth',
            'arth',
            'orth',
            'oth',
            'illon',
            'ichi',
            'ov',
            'arvis',
            'ara',
            'ars',
            'yke',
            'yria',
            'onoe',
            'ippe',
            'osie',
            'one',
            'ore',
            'ade',
            'adus',
            'urn',
            'ypso',
            'ora',
            'iuq',
            'orix',
            'apus',
            'ion',
            'eon',
            'eron',
            'ao',
            'omia'],
        },
        mtx = [[1, 1, 2, 2, 5, 5],
          [2, 2, 3, 3, 6, 6],
          [3, 3, 4, 4, 5, 5],
          [4, 4, 3, 3, 6, 6],
          [3, 3, 4, 4, 2, 2, 5, 5],
          [2, 2, 1, 1, 3, 3, 6, 6],
          [3, 3, 4, 4, 2, 2, 5, 5],
          [4, 4, 3, 3, 1, 1, 6, 6],
          [3, 3, 4, 4, 1, 1, 4, 4, 5, 5],
          [4, 4, 1, 1, 4, 4, 3, 3, 6, 6]],
        fn = function(i) {
          return Math.floor(Math.random() * vowels[i].length);
        };
    let ret = [], name, comp, i, il, c = 0;

    for ( ; c < count ; c++ ) {
      name = '';
      comp = mtx[c % mtx.length];
      for ( i = 0, il = comp.length / 2 ; i < il ; i++ ) {
        name += vowels[comp[i * 2]][fn(comp[i * 2 + 1])];
      }
      ret.push(name);
    }

    return ret;
  },

}
