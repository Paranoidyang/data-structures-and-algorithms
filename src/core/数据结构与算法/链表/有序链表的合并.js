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
export default function () {
   function ListNode(val) {
      this.val = val;
      this.next = null;
   }
   /**
    * 有序链表的合并
    * @param {*} l1 链表1
    * @param {*} l2 链表2
    */
   function mergeTwoLists(l1, l2) {
      let head = new ListNode()// 定义头结点，确保链表可以被访问到
      let cur = head// cur 这里就是咱们那根“针”
      while (l1 && l2) {
         if (l1.val <= l2.val) { // 如果 l1 的结点值较小
            cur.next = l1 // 先串起 l1 的结点
            l1 = l1.next// l1 指针向前一步
         } else {
            cur.next = l2 // l2 较小时，串起 l2 结点
            l2 = l2.next// l2 向前一步
         }
         cur = cur.next// “针”在串起一个结点后，也会往前一步
      }
      cur.next = l1 !== null ? l1 : l2// 处理链表不等长的情况，因为是有序的，直接串起来即可
      return head.next// 返回起始结点
   }


}

