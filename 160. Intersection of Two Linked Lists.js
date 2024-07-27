/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA) {
    while (pB) {
      if (pA == pB) {
        return pB;
      }
      pB = pB.next;
    }
    pA = pA.next;
    pB = headB;
  }
  return null;
};
