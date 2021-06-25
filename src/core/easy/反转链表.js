/**
 * 题目描述：定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 例如，输入: 1->2->3->4->5->NULL，输出: 5->4->3->2->1->NULL 
 */

/**
 * 解题分析：pre=null、current、next，遍历链表，向后移动
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export default function () {
  function reverseList(head) {
    let prev = null
    let current = head
    while (current !== null) {
      const next = current.next//记录当前节点的下一个节点
      current.next = prev//翻转节点指针
      prev = current//向后移动
      current = next//最后会是null
    }
    return prev
 };
}

