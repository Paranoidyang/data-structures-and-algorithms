/**
 * 题目描述：给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 
 * 假定 BST 有如下定义：
    结点左子树中所含结点的值小于等于当前结点的值
    结点右子树中所含结点的值大于等于当前结点的值
    左子树和右子树都是二叉搜索树

   例如：给定 BST [1,null,2,2], 返回[2].

   提示：如果众数超过1个，不需考虑输出顺序

   进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

 */

/**
* 暴力通用解法（即使是普通二叉树也可以用这个方式解决）
* @param {*} root 
*/
function findMode(root) {
  const m = new Map()
  const inorder = (root) => { // 遍历并记录每个值出现的频率
    if(!root) return null
    inorder(root.left)
    m.set(root.val, m.has(root.val) ? m.get(root.val) + 1 : 1)
    inorder(root.right)
  }
  inorder(root)
  const mArr = Array.from(m).sort((a, b) => b[1] - a[1]) // 将map转成数组后按从大到小排序
  const maxCount = mArr[0][1] // 第一个数即是其中一个众数
  const res = [mArr[0][0]] // 结果集，已确认的众数先收集
  for(let i = 1; i < mArr.length; i++) { // 继续查找其他众数
    if(mArr[i][1] === maxCount) {
      res.push(mArr[i][0])
    }
  }
  return res
}

/**
 * 利用二叉搜索树中序遍历有序特性，不使用额外空间
 * @param {*} root 
 */
function findMode(root) {
  let count = 0, 
      maxCount = 1,
      pre = root,
      res = []

  // 1.确定递归函数及函数参数，中序遍历（有序）
  const inorder = cur => {
    // 2. 确定递归终止条件
    if(cur === null) return
    inorder(cur.left)
    // 3. 单层递归逻辑
    if(pre.val === cur.val) {
      count++
    }else {
        count = 1
    }
    pre = cur
    if(count === maxCount) {
        res.push(cur.val)
    }
    if(count > maxCount) {
        res = []
        maxCount = count
        res.push(cur.val)
    }
    inorder(cur.right)
  }

  inorder(root)

  return res
}


// 测试
const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: null
  }
}
console.log(findMode(root))