/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters[0]>target || letters[letters.length-1] == target){
        return letters[0]
    }

    if(!letters.includes(target)){
        for(var i = 0;i < letters.length;i++){
            if(letters[i]>target){
                return letters[i]
            }
        }
        return letters[0]
    }
    for(var i =1;i<letters.length;i++){
        if(letters[i]<=target){

        }else{
            return letters[i]
        }
    }
};