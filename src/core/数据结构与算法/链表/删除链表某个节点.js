/**
 * 题目描述：给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * 
 * 示例 1：
 * 输入：head = [1,2,6,3,4,5,6], val = 6
   输出：[1,2,3,4,5]

   示例 2：
   输入：head = [], val = 1
   输出：[]

   示例 3：
   输入：head = [7,7,7,7], val = 7
   输出：[]

   解题分析：如果删除的是头节点，则将头节点的next置为空，此时链表的头节点变成了原头节点的下一个节点；非头节点需要遍历链表将删除节点的前一个节点和后一个节点连接起来，此时链表的头节点不变
 * 
 */

/**
 * 链表值不重复时
  * @param {ListNode} head
  * @param {number} val
  * @return {ListNode}
  */
function deleteNode(head, val) {
    //如果删除的是头节点
    if (head.val === val) {
        let next = head.next
        head.next = null//删除节点
        return next
    }
    let prev = head
    let curr = head.next
    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next//将上一个节点与下一个节点连接起来
            curr.next = null //删除节点
        }
        prev = curr
        curr = curr.next
    }
    return head
}

/**
 * 链表值存在重复时
  * @param {ListNode} head
  * @param {number} val
  * @return {ListNode}
  */
function deleteNode(head, val) {
    // 删除头部节点
    while (head !== null && head.val === val) {
        head = head.next;
    }
    if (head === null) return head;
    let pre = head, cur = head.next;
    // 删除非头部节点
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
        } else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
}

/**
 * 虚拟头节点解法（无论值是否重复，都可以使用此解法）
 * 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。需要遍历链表一次。
 * 空间复杂度：O(1)O(1)
 * @param {*} head 
 * @param {*} val 
 */
function deleteNode(head, val) {
    const dummyNode = new ListNode(-1)
    dummyNode.next = head
    let curr = dummyNode
    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return dummyNode.next
}



// 测试
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(2)
const f = new ListNode(2)
a.next = b
b.next = c
c.next = d
d.next = f

console.log(deleteNode(a, 2))






