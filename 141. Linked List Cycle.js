/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null) return false;
  let slow = (fast = head);

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow == fast) return true;
  }

  return false;
};
