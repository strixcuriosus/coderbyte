function longestWord(sen) { 
  var list = sen.split(/[^A-Za-z]/);
  var len = 0;
  var word;
  for(var i = 0; i < list.length; i++){
    if (list[i].length > len) {
      word = list[i];
      len = list[i].length;
    }
  }
  return word; 
         
}
   