function LongestWord(string) { 
    var str = string.replace(/\W/g,' ');
    var wordlist = str.split(" ");
    var wordlen = 0;
    var ans = '';
    for (var i = 0; i < wordlist.length; i++){
        if (wordlist[i].length > wordlen){
            wordlen = wordlist[i].length;
            ans = wordlist[i];
        }
    }
    return ans;
            
}
