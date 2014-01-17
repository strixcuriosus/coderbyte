/* Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. */

function LetterCountI(str) {
    function countletters(word){
        var foundLetters = {},
            currentletter;
        for (var i = 0, len = word.length; i < len; i++){
            // use charAt to get a letter
            if (word.charAt(i) in foundLetters)
                ;
            else 
                foundLetters[charAt(i)] = 0;

            //is it in my letter-collecting obj ? add 1 to count : add letter to letter-collecting obj with count 0

        }
        //iterate over dict and sum values
        //return sum
    }

//make an array of words
//map to a new array with countletters fn
//find the index of the max of that array
//if the max is 0, return -1
//return the word at that index in the words array



}