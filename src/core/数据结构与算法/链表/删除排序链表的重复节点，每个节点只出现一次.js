/**
 * 题目描述：给定一个排序链表，删除所有重复的节点，使得每个节点只出现一次。
 * 示例：
 * 输入: 1->1->2
   输出: 1->2
   示例 2:
   输入: 1->1->2->3->3
   输出: 1->2->3
 * 思路：将需要删除的目标结点的前驱结点 next 指针往后指一格。判断两个节点是否重复，由于此处是已排序的链表，我们直接判断前后两个节点值是否相等即可。
 */

/**
 * 删除有序链表的重复节点
 * @param {*} head 
 */
function deleteDuplicates(head) {
   let curr = head // 设定 cur 指针，初始位置为链表第一个结点
    while(curr && curr.next) {
      if(curr.val === curr.next.val) { // 若当前结点和它后面一个结点值相等（重复）
          curr.next = curr.next.next // 删除靠后的那个结点（去重）
      }else {
          curr = curr.next // 若不重复，继续遍历
      }
    }
    return head
}



// 测试
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(2)
const d = new ListNode(3)
const f = new ListNode(3)
a.next = b
b.next = c
c.next = d
d.next = f

console.log(deleteDuplicates(a))

