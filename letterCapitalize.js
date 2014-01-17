function LetterCapitalize(str) { 
  var arr = str.split(" ");
  for (var i in arr){
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  var ans = arr.join(" ");
  return ans; 
         
}