/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y = x.toString();

    for (var i = 0, j = y.length - 1; i < j; i++, j--) {
        if (y[i] !== y[j]) {
            return false;
        }
    }

    return true;
};