function timeConvert(num) { 

  // code goes here  
  var hours = Math.floor(num / 60);
  var min = num % 60;
  return hours + ":" + min;
         
}
   