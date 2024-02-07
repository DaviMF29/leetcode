/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = new Map();
    var text = ""
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (!map.has(char)) {
            map.set(char, [char]);
        } else {
            var currentValue = map.get(char);
            currentValue.push(char);
            map.set(char, currentValue);
        }
    }

    var entries = Array.from(map.entries());

    entries.sort((a, b) => b[1].length - a[1].length);
    
    for (const [char, charsArray] of entries) {
        text += charsArray.join('')
    }

    return text
};