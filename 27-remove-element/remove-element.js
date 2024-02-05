/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
removeElement = function(nums, val) {
    let aux = []
    for(let num of nums){
        if(num != val){
            aux.push(num)
        }
    }
    let numslength = aux.length
    for(let i =0;i<nums.length;i++){
        nums[i] = aux[i]
    }
    return numslength
};