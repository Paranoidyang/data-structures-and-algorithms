/**
 * 题目描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。给定的 n 保证是有效的。
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个结点后，链表变为 1->2->3->5
 * 
 * 思路：
 * 1、首先两个指针 slow 和 fast，全部指向链表的起始位——dummy 结点
 * 2、快指针先出发！闷头走上 n 步，在第 n 个结点处打住
 * 3、然后，快慢指针一起前进，当快指针前进到最后一个结点处时，两个指针再一起停下来，此时，慢指针所指的位置，就是倒数第 n 个结点的前一个结点。
 */

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function deleteNode(head, n) {
    let dummyHead = new ListNode(0, head) // 创建虚拟头节点
    let fast = slow = dummyHead // 初始化快慢指针，均指向dummyHead
    while (n--) fast = fast.next // 快指针闷头走 n 步，写法等价于下面
    while (fast.next !== null) { // 快慢指针一起走
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next// 删除目标节点，此时slow节点指向目标节点的前一个节点
    return dummyHead.next
};

