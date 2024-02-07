var majorityElement = function(nums) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    var majorityCount = Math.floor(nums.length / 2);
    for (var [key, value] of map) {
        if (value > majorityCount) {
            return key;
        }
    }

    return undefined;
};
