/**
 * 题目描述：给定一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 *          你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 
 * 示例 1：
 * 输入：head = [1,2,3,4]
   输出：[2,1,4,3]

   示例 2：
   输入：head = []
   输出：[]

   示例 3：
   输入：head = [1]
   输出：[1]
 */

function LinkNode(val, next = null) {
  this.val = val
  this.next = next
}

/**
 * 交换链表节点
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {*} head 
 */
function swapPairs(head) {
  // 创建虚拟头节点
  const dummyHead = new LinkNode(-1, head)
  let curr = dummyHead
  // 偶数个节点时通过curr.next !== null结束循环，奇数个节点时通过curr.next.next !== null结束循环
  while (curr.next !== null && curr.next.next !== null) {
    const left = curr.next
    const right = curr.next.next
    const next = curr.next.next.next
    curr.next = right
    right.next = left
    left.next = next
    curr = left // 通过前一个节点，操作后面两个节点
  }
  return dummyHead.next
}

// 测试
const a = new LinkNode(1)
const b = new LinkNode(2)
const c = new LinkNode(3)
const d = new LinkNode(4)
a.next = b
b.next = c
c.next = d
console.log(swapPairs(a))



