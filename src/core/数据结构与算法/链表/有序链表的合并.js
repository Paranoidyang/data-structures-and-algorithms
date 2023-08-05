/**
 * 题目描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 * 示例：输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4 
 * 思路：做链表处理类问题，大家要把握住一个中心思想——处理链表的本质，是处理链表结点之间的指针关系。
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
 * 有序链表的合并
 * @param {*} l1 链表1头节点
 * @param {*} l2 链表2头节点
 */
function mergeTwoLists(l1, l2) {
  const dummyNode = new ListNode() // 定义虚拟头结点
  let curr = dummyNode
  while (l1 && l2) {
    if (l1.val <= l2.val) {  // 如果 l1 的结点值较小
      curr.next = l1  // 先串起 l1 的结点
      l1 = l1.next // l1 指针向前一步
    } else {
      curr.next = l2  // l2 较小时，串起 l2 结点
      l2 = l2.next // l2 向前一步
    }
    curr = curr.next // “针”在串起一个结点后，也会往前一步
  }
  curr.next = l1 ? l1 : l2 // 处理链表不等长的情况，因为是有序的，直接串起来即可
  return dummyNode.next // 返回起始结点
}

// 测试
const a1 = new ListNode(1)
const a2 = new ListNode(2)
const a4 = new ListNode(4)
a1.next = a2
a2.next = a4
const b1 = new ListNode(1)
const b3 = new ListNode(3)
const b4 = new ListNode(4)
b1.next = b3
b3.next = b4

console.log(mergeTwoLists(a1, b1).val)


