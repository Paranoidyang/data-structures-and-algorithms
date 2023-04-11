/**
 * 题目描述：根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意: 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
    中序遍历 inorder = [9,3,15,20,7]
    后序遍历 postorder = [9,15,7,20,3] 返回如下的二叉树：

    3
    /\
   9  20
      /\
    15  7

   思路：

    第一步：如果数组大小为零的话，说明是空节点了

    第二步：如果不为空，那么取后序数组最后一个元素作为节点元素

    第三步：找到后序数组最后一个元素在中序数组的位置，作为切割点

    第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）

    第五步：切割后序数组，切成后序左数组和后序右数组

    第六步：递归处理左区间和右区间

   拓展：

    前序和中序可以唯一确定一棵二叉树。

    后序和中序可以唯一确定一棵二叉树。

    那么前序和后序可不可以唯一确定一棵二叉树呢？

    前序和后序不能唯一确定一棵二叉树！，因为没有中序遍历无法确定左右部分，也就是无法分割。

 */

/**
 * 递归法
 * @param {*} inorder 中序遍历
 * @param {*} postorder 后序遍历
 */
function buildTree(inorder, postorder) {
  if(inorder.length === 0) return null
  const root = {}
  root.val = postorder[postorder.length -1]
  // 找到中序遍历的切割点，切割中序数组
  const delimiterIndex = inorder.indexOf(root.val)
  const leftArrIn = inorder.slice(0, delimiterIndex)
  const rightArrIn = inorder.slice(delimiterIndex + 1)
  // 切割后序数组
  // todo: 可以优化
  const leftArrPost = postorder.filter(item => leftArrIn.includes(item))
  const rightArrPost = postorder.filter(item => rightArrIn.includes(item))
  // 递归
  root.left = buildTree(leftArrIn, leftArrPost)
  root.right = buildTree(rightArrIn, rightArrPost)
  return root
}

// 测试
const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]
console.log(buildTree(inorder, postorder))