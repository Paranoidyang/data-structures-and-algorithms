/**
 * 题目描述：给定一个链表，判断链表中是否有环。
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
 * 标识位，判断链表是否有环
 * @param {*} head 
 */
function hasCycle(head) {
  while (head) {
    if (head.flag) {// 如果 flag 已经立过了，那么说明环存在
      return true
    } else {
      head.flag = true
      head = head.next// 如果 flag 没立过，就立一个 flag 再往下走
    }
  }
  return false
}

/**
 * 快慢指针，判断链表是否有环
 * @param {*} head 
 * @returns 
 */
function hasCycle(head) {
  if (!head || !head.next) return null;
  let slow = head.next, fast = head.next.next; //定义快慢指针
  while (fast && fast.next) {
    slow = slow.next; // 慢指针走一步
    fast = fast.next.next; // 快指针走两步
    if (fast == slow) { // 相遇说明有环
      return true
    }
  }
  return false;
};

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
console.log(hasCycle(node1))

