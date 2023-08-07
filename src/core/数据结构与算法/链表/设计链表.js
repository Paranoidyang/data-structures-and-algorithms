/**
 * 题目描述：在链表类中实现这些功能：
            get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
            addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
            addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
            addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
            deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 */

/**
 * 辅助函数，用于创建链表节点
 * @param {*} val 
 * @param {*} next 
 */
function LinkNode(val, next) {
  this.val = val
  this.next = next
}

/**
 * 链表类
 */
class MyLinkedList {
  constructor() {
    this.size = 0
    this.head = null // 头节点
    this.tail = null // 尾节点
  }

  // 获取当前 index 对应的节点
  getNode(index) {
    if (index < 0 || index >= this.size) return null
    const dummyNode = new LinkNode(-1, this.head) // 创建虚拟头节点
    let curr = dummyNode
    for (let i = 0; i <= index; i++) {
      curr = curr.next
    }
    return curr
  }

  //获取链表中第 index 个节点的值。如果索引无效，则返回-1。
  get(index) {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
  }

  // 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
  addAtHead(val) {
    const node = new LinkNode(val, this.head)
    this.head = node
    this.size++
    if (!this.tail) { // 只有一个节点时，首尾节点相同
      this.tail = node
    }
  }

  // 将值为 val 的节点追加到链表的最后一个元素。
  addAtTail(val) {
    const node = new LinkNode(val, null)
    this.size++
    if (this.tail) {
      this.tail.next = node
      this.tail = node
      return
    }
    this.head = node
    this.tail = node
  }

  // 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
  addAtIndex(index, val) {
    // 边界处理
    if (index > this.size) {
      return
    }
    if (index === this.size) {
      this.addAtTail(val)
      return
    }
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    // 获取目标节点的上一个的节点
    const prev = this.getNode(index - 1)
    // 创建节点插入
    prev.next = new LinkNode(val, prev.next)
    this.size++
  }

  // 如果索引 index 有效，则删除链表中的第 index 个节点。
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size || this.head === null) return
    // 处理头节点
    if (index === 0) {
      this.head = this.head.next
      if (index === this.size - 1) { // 如果删除的这个节点同时是尾节点（即链表只有一个节点时），要处理尾节点
        this.tail = this.head
      }
      this.size--
      return
    }
    const prev = this.getNode(index - 1)
    prev.next = prev.next.next
    // 处理尾节点
    if (index === this.size - 1) {
      this.tail = prev
    }
    this.size--
  }
}

// 测试
const linkedList = new MyLinkedList()
linkedList.addAtTail(1)
linkedList.addAtTail(2)
linkedList.addAtTail(3)
linkedList.addAtTail(4)
linkedList.addAtHead(0)
linkedList.deleteAtIndex(1)
linkedList.addAtIndex(1, 1)
console.log(linkedList)
console.log(linkedList.getNode(0))
console.log(linkedList.getNode(1))
console.log(linkedList.getNode(2))
console.log(linkedList.getNode(3))
console.log(linkedList.getNode(4))
console.log(linkedList.get(1))