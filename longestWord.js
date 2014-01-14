function longestWord(string) { 
    var wordlist = string.replace(/[\W0-9]/g,' ').split(" ");
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
