function letterChanges(str) { 
  str = str.toLowerCase()
  var alpha = "abcdefghijklmnopqrstuvwxyzA";
  var ans = ''
  var vowels = 'aeiou'
  for (var i = 0; i < str.length; i++){
    if (alpha.indexOf(str[i]) >= 0){
    ans += alpha[alpha.indexOf(str[i]) + 1];
    } else{
      ans += str[i];
    }
  }
  ans = ans.replace("a", "A");
  ans = ans.replace("o", "O");
  ans = ans.replace("i", "I");
  ans = ans.replace("u", "U");
  ans = ans.replace("e", "E");

  return ans; 
         
}
//try to refactor with RegEx, character number lookups, mapping
