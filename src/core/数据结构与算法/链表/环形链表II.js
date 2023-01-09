/**
 * 题目描述：给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
   为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
   说明：不允许修改给定的链表。

   快慢指针：快指针一次走两个节点，慢指针一次走一个节点，如果是一条直线，没有环的话，快慢指针不可能相遇，如果相遇了说明有环，且快指针会先入环，然后慢指针再入环，之后可以理解为快指针相对于慢指针以一个节点的速度追赶慢指针，它们一定会相遇。
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
a.next = b
b.next = c
c.next = d
d.next = a

/**
 * 快慢指针
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {*} head 
 * @returns 
 */
function detectCycle(head) {
  if (!head || !head.next) return null;
  let slow = head.next, fast = head.next.next; //定义快慢指针
  while (fast && fast.next) {
    slow = slow.next; // 慢指针走一步
    fast = fast.next.next; // 快指针走两步
    if (fast == slow) { // 相遇说明有环
      let ptr = head; // 根据数学推断，链表头部和环内相遇的节点距离入环第一个节点的长度相等
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};

/**
 * 哈希表 new Set()
 * 遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点，就可以判定链表中存在环。并且第一个遇到的之前遍历的节点就是入环的第一个节点。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {*} head 
 * @returns 
 */
function detectCycle(head) {
  const visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

console.log(detectCycle(a))