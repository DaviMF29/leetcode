/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var word = s.trim().split(" ");
    var lastword = word[word.length - 1];
    return lastword.length
};