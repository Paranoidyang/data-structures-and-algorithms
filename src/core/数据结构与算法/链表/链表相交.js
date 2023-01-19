/**
 * 题目描述：给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 * 
 * 题目数据 保证 整个链式结构中不存在环。
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 */

/**
 * 辅助函数，求一个链表的长度
 * @param {*} head 
 * @returns 
 */
function getListLen(head) {
  let len = 0, curr = head
  while (curr !== null) {
    len++
    curr = curr.next
  }
  return len
}

/**
 * 返回两个单链表相交的起始节点
 * @param {*} headA 
 * @param {*} headB 
 */
function getIntersectionNode(headA, headB) {
  // 定义两个指针分别指向两个链表的头部
  let currA = headA, currB = headB
  // 先求两个链表的长度
  let lenA = getListLen(headA)
  let lenB = getListLen(headB)
  // 计算差值
  let diff = Math.abs(lenA - lenB)
  // 将较长链表的指针移动到差值对应索引的节点，让curA和curB在同一起点上（末尾位置对齐）
  if (lenA > lenB) {
    while (diff--) {
      currA = currA.next
    }
  } else {
    while (diff--) {
      currB = currB.next
    }
  }
  // 遍历curA 和 curB，遇到相同则直接返回
  while (currA !== null && currB !== null) {
    if (currA === currB) {
      return currA
    }
    currA = currA.next
    currB = currB.next
  }
  return null
}

// 测试
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}
const a = new ListNode(0)
const b = new ListNode(9)
const c = new ListNode(1)
const d = new ListNode(2)
const e = new ListNode(4)
const f = new ListNode(3)

a.next = b
b.next = c
c.next = d
d.next = e

f.next = d
d.next = e

console.log(getIntersectionNode(a, f))

