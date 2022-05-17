/**
 * 题目描述：输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

/**
 * 解题分析：遍历链表，始终从数组的头部添加节点值，从而实现反转
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export default function () {
  function reversePrint(head) {
    let nums = []
    let node = head
    while (node !== null) {
      nums.unshift(node.val)
      node = node.next
    }
    return nums
  }
}


