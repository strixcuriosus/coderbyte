function arrayAdditionI(arr) { 
    function powerSet(array){
        var set = [[]];
        for (var i = 0, arrLen = array.length; i < arrLen; i++){
            for (var j = 0, setLen = set.length; j < setLen; j++){
                set.push(set[j].concat([array[i]]));
            }
        }
        return set;
    }

    function sum (array){
        var result = 0;
        for (var i = 0, len = array.length; i < len; i++){
            result += array[i];
        }
        return result;
    }

    function popMax (array) {
        var result = array[0],
            index = 0;
        for (var i = 1, len = array.length; i < len; i++){
            if (array[i] > result) {
                result = array[i];
                index = i;
            }
        }
        array.splice(index, 1);
        return result;
    }

    var target = popMax(arr);
    var subsets = powerSet(arr);
    for (var i = 0, len = subsets.length; i < len; i++){
        if (sum(subsets[i]) == target){
            return "true";
        }
    }
    return "false";
         
}