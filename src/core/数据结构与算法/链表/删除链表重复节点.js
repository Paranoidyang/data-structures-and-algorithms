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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 删除有序链表的重复节点
 * @param {*} head 
 */
function deleteDuplicates(head) {
   let cur = head// 设定 cur 指针，初始位置为链表第一个结点
   while (cur != null && cur.next != null) {
      let next = cur.next
      if (cur.val === next.val) {// 若当前结点和它后面一个结点值相等（重复）
         cur.next = next.next // 删除靠后的那个结点（去重）
      } else {
         cur = cur.next// 若不重复，继续遍历
      }
   }
   return head
}

