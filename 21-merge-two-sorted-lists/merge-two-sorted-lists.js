/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
    let ans = new ListNode(-1); 
    let current = ans;

    while (list1 || list2) {
        if (!list1) {
            current.next = list2
            break
        }
        if (!list2) {
            current.next = list1
            break
        }

        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else { 
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    return ans.next

}