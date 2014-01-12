function firstFactorial(num) { 
  var ans = 1;
  for (var i = num; i > 0; i--){
    ans *= i;
   };
  return ans; 
         
}

//take a num parameter and return num! (number factorial)
//firstFactorial(4); // 24