/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = (slow = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  while (slow) {
    let save = slow.next;
    slow.next = prev;
    prev = slow;
    slow = save;
  }
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    } else {
      prev = prev.next;
      head = head.next;
    }
  }
  return true;
};
