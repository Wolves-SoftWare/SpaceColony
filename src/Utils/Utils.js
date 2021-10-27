module.exports ={
  /**
   *
   * @param list {Array} An array of choices available
   * @param weights An array of weights
   */
  choice(list,weights){
  if(!weights.length) return
  let newListweights =[]
  let newList =[]

  weights.forEach(w =>{
    const index =weights.indexOf(w)
    if(w !== 0){
      newListweights.push(w)
      newList.push(weights[index])
    }
  })
  let str = ''
  for(const elem of list){
    let index = list.indexOf(elem)
    let indice = weights[index]
    for(let i = 0; i < indice; i++ ){
      str += elem
      console.log(str)
    }
  }
  list = str.split('')
  return list[Math.floor(Math.random()*list.length)]
}
}


