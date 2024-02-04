/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return '';
    }

    var commonPrefix = '';

    for (var aux = 0; aux < strs[0].length; aux++) {
        var currentChar = strs[0][aux];

        for (var i = 1; i < strs.length; i++) {
            if (aux >= strs[i].length || strs[i][aux] !== currentChar) {
                return commonPrefix;
            }
        }
        
        commonPrefix += currentChar;
    }

    return commonPrefix;
};

