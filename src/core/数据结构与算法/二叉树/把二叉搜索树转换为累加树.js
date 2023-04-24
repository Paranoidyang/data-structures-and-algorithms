/**
 * 题目描述：给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树，使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 
 * 二叉搜索树满足下列约束条件：
   节点的左子树仅包含键 小于 节点键的节点。 节点的右子树仅包含键 大于 节点键的节点。 左右子树也必须是二叉搜索树。
 */

function convertBST(root) {
  let pre = 0;
  const ReverseInOrder = (cur) => {
      if(cur) {
          ReverseInOrder(cur.right);
          cur.val += pre;
          pre = cur.val;
          ReverseInOrder(cur.left);
      }
  }
  ReverseInOrder(root);
  return root;
}