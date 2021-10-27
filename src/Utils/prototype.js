Array.prototype.minimal = function () {
  let min = this[0];
  for (let i = 1; i < this.length; ++i) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min
}

Array.prototype.asSameValue = function(array) {
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(this[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}
