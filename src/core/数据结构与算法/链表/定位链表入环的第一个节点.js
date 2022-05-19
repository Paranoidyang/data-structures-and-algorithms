/**
 * 题目描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
 * 思路：我们试想如果从头开始遍历一个链表，假如途中进入了一个环，那么首先被打上 flag 标签的其实就是环的起点。待我们遍历完这个环时，即便环上所有的结点都已经被立了 flag，
 * 但起点处的 flag 一定最先被我们定位到。因此，我们只需要在第一次发现 flag 已存在时，将对应的结点返回即可
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 定位链表入环的第一个节点
 * @param {*} head 
 */
function detectCycle(head) {
  while (head) {
    if (head.flag) {// 如果 flag 已经立过了，那么说明环存在
      return head// 第一个被定位到有flag的节点即为环的起点
    } else {
      head.flag = true
      head = head.next// 如果 flag 没立过，就立一个 flag 再往下走
    }
  }
  return null
}
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
console.log(detectCycle(node1))

