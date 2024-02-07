/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var map = new Map()

    for (i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], [nums[i]]);
        }
        else if (map.get(nums[i]).length ==2) {
            nums.splice(i,1)
            i--
        }
        else {
            var currentValue = map.get(nums[i]);
            currentValue.push(nums[i]);
            map.set(nums[i], currentValue);
        }
    }

    

    return nums.length

};

