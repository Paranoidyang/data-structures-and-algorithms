/**
 * 题目描述：给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
             你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
 */


const t1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null,
  }
}

const t2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right:  {
      val: 4,
      left: null,
      right: null,
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    }
  },
}

/**
 * 递归法
 * @param {*} t1 
 * @param {*} t2 
 * @returns 
 */
function mergeTrees(t1, t2) {
  if(t1 === null) return t2
  if(t2 === null) return t1
  t1.val = t1.val + t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}

// 测试
console.log(mergeTrees(t1, t2))