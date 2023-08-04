/**
 * 题目描述：定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 例如，输入: 1->2->3->4->5->NULL，输出: 5->4->3->2->1->NULL 
 */

/**
 * 解题分析：pre = null、cur、next，遍历链表，向后移动
 */

/**
 * 翻转链表
 * @param {*} head 头节点
 * @returns 
 */
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    // 先存 -》 翻转 -》 往后移
    let next = curr.next // 先记录当前节点的下一个节点，避免翻转后丢失
    curr.next = prev // 翻转节点指针
    prev = curr // 向后移动
    curr = next // 最后会是null
  }
  return prev
}

// 测试
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
a.next = b
b.next = c
console.log(reverseList(a))

