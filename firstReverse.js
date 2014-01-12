function firstReverse(input) { 
  var str = '';
  for ( var i = input.length - 1; i >=0; i--){
    str += input[i];
  };
  return str;
}
   
//takes input parameter and returns a reversed string
// firstReverse("lolcat"); // "taclol"