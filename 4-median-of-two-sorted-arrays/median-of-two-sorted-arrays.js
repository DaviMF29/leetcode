/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2)
    arr.sort((a, b) => a - b)
    let aux = arr.length
    if(aux%2 ==0){
        return (arr[aux/2] + arr[aux/2 -1]) / 2
    }
    aux = arr.length +1
    return arr[aux/2 -1]
};