/**
 * 题目描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。1 ≤ m ≤ n ≤ 链表长度
 * 示例:
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
   * 局部反转链表
   * @param {*} head 
   * @param {*} m 
   * @param {*} n 
   * @returns 
   */
  function reverseBetween(head, m, n) {
    let pre, cur, leftHead // 定义pre、cur，用leftHead来承接整个区间的前驱结点
    const dummy = new ListNode()
    dummy.next = head// dummy后继结点是头结点
    let p = dummy// p是一个游标，用于遍历，最初指向 dummy
    for (let i = 0; i < m - 1; i++) {// p往前走 m-1 步，走到整个区间的前驱结点处
      p = p.next
    }
    leftHead = p// 缓存这个前驱结点到 leftHead 里
    let start = leftHead.next// start 是反转区间的第一个结点
    pre = start // pre 指向start
    cur = pre.next// cur 指向 start 的下一个结点
    for (let i = m; i < n; i++) {// 开始重复反转动作
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    leftHead.next = pre //  leftHead 的后继结点此时为反转后的区间的第一个结点
    start.next = cur// 将区间内反转后的最后一个结点 next 指向 cur
    return dummy.next // dummy.next 永远指向链表头结点
  };
}

