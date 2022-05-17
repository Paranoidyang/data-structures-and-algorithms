/**
 * 题目描述：给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。
 * 说明：题目保证链表中节点的值互不相同
 */

/**
 * 解题分析：如果删除的是头节点，则将头节点的next置为空，此时链表的头节点变成了原头节点的下一个节点；非头节点需要遍历链表将删* 除节点的前一个节点和后一个节点连接起来，此时链表的头节点不变
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export default function () {
  /**
   * @param {ListNode} head
   * @param {number} val
   * @return {ListNode}
   */
  function deleteNode(head, val) {
    //如果删除的是头节点
    if(head.val === val) {
        let next = head.next
        head.next = null//删除节点
        return next
    }else {
        let prev = head
        let curr = head.next
        while(curr !== null) {
            if(curr.val === val) {
                prev.next = curr.next//将上一个节点与下一个节点连接起来
                curr.next = null //删除节点
            }
            prev = curr
            curr = curr.next
        }
        return head
    }
    
 };
}

