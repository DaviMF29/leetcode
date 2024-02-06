/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        
        if (digits[i] > 9) {
            digits[i] %= 10;
            carry = 1;
        } else {
            carry = 0;
            break;
        }
    }
    
    if (carry) {
        digits.unshift(1);
    }
    
    return digits;
};