/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToDecimal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var decimal = 0;

    for (var i = 0; i < s.length; i++) {
        var curr = romanToDecimal[s[i]];
        var next = romanToDecimal[s[i + 1]];

        if (next > curr) {
            decimal += (next - curr);
            i++;  
        } else {
            decimal += curr;
        }
    }

    return decimal;
};


