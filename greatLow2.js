function secondGreatLow(arr) { 
  function sortnum (a, b){
    return a - b;
  }
  
  var sorted = arr.sort(sortnum)
  return sorted[1] + " " + sorted[sorted.length - 2];
}