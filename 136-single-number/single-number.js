/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map.has(num)) {
            map.get(num).push(i);
        } else {
            map.set(num, [i]);
        }
    }

    var entries = Array.from(map.entries());
    entries.sort((a, b) => a[1].length - b[1].length);

    for (let [key, value] of entries) {
        if (value.length === 1) {
            return key;
        }
    }
};