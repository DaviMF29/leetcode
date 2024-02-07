var frequencySort = function(s) {
    var map = new Map();
    var text = "";
    for (var i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [s[i]]);
        } else {
            var currentValue = map.get(s[i]);
            currentValue.push(s[i]);
            map.set(s[i], currentValue);
        }
    }

    var entries = Array.from(map.entries());

    entries.sort((a, b) => b[1].length - a[1].length);
    
    for (const [char, charsArray] of entries) {
        text += charsArray.join('');
    }

    return text;
};

frequencySort("aassd"); 
