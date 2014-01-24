function ThirdGreatest(strArr) { 
  var ansArr = strArr.sort(function(a,b){return a.length < b.length});

  return ansArr[2]; 
         
}
   