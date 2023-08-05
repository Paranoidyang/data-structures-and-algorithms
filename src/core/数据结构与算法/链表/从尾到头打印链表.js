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

function reversePrint(head) {
  const res = []
  let curr = head
  while (curr) {
    res.unshift(curr.val)
    curr = curr.next
  }
  return res
}

// 测试
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null
console.log(reversePrint(node1))


