/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if (index !== -1) {
        return index;
        } 

    for (var i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            nums.splice(i, 0, target);
            return i; 
        }
    }
    nums.push(target);
    return nums.length - 1;
};