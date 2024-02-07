/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (list1, m, list2, n) => {
    let i = m - 1; 
    let j = n - 1; 
    let k = m + n - 1; 

    while (i >= 0 && j >= 0) {
        if (list1[i] > list2[j]) {
            list1[k] = list1[i]; 
            i--; 
        } else {
            list1[k] = list2[j]; 
            j--; 
        }
        k--; 
    }

    while (j >= 0) {
        list1[k] = list2[j];
        k--;
        j--;
    }
    while (i >= 0) {
        list1[k] = list1[i];
        k--;
        i--;
    }
};
