/**
 * 题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 答案不唯一！
 * 
 */

/**
 * 递归
 * @param {*} nums 有序数组
 * @returns 
 */
function sortedArrayToBST(nums) {
  const len = nums.length
  const buildTree = (nums, left, right) => {
    if(nums.length === 0 || left > right) return null
    const midIndex = Math.floor(left + (right - left) / 2)
    const mid = nums[midIndex]
    const root = {val: mid, left: null, right: null}
    root.left = buildTree(nums, left, midIndex - 1)
    root.right = buildTree(nums, midIndex + 1, right)
    return root
  }
  return buildTree(nums, 0, len - 1)
}

// 测试
const nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums))

