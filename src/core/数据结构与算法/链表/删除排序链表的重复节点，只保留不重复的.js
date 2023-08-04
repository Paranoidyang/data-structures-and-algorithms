/**
 * 题目描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中没有重复出现的数字。
 * 示例：
 * 输入: 1->2->3->3->4->4->5
   输出: 1->2->5
   示例 2:
   输入: 1->1->1->2->3
   输出: 2->3
 */

/**
 * 删除有序链表的所有重复节点，只保留不重复的节点
 * @param {*} head 
 */
function deleteDuplicates(head) {
  if (!head || !head.next) return head // 极端情况：0个或1个结点，则不会重复，直接返回
  let dummy = new ListNode()
  dummy.next = head// dummy 永远指向头结点
  let cur = dummy// cur 从 dummy 开始遍历
  while (cur.next && cur.next.next) {// 当 cur 的后面有至少两个结点时
    if (cur.next.val === cur.next.next.val) {// 对 cur 后面的两个结点进行比较
      let val = cur.next.val// 若值重复，则记下这个值
      while (cur.next && cur.next.val === val) { // 反复地排查后面的节点是否存在多次重复该值的情况
        cur.next = cur.next.next// 若有，则删除
      }
    } else {
      cur = cur.next// 若不重复，则正常遍历
    }
  }
  return dummy.next // 返回链表的起始结点

}

// 测试
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(3)
const f = new ListNode(5)
a.next = b
b.next = c
c.next = d
d.next = f

console.log(deleteDuplicates(a))

