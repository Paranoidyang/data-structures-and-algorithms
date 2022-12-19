/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 示例 1：
 *  输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
    输出：6
    解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

   示例 2：
    输入：height = [4,2,0,3,2,5]
    输出：9

    分析：当前列雨水面积：min(左边柱子的最高高度，右边柱子的最高高度) - 当前柱子高度。
    因为每次遍历列的时候，还要向两边寻找最高的列，所以时间复杂度为O(n^2)。 空间复杂度为O(1)
 */

/**
 * 双指针解法
 * @param {*} height 
 */
function trap(height) {
  const len = height.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    let lHeight = height[i] // 记录左边柱子的最高高度
    let rHeight = height[i] // 记录右边柱子的最高高度
    if (i == 0 || i == len - 1) { // 第一个柱子和最后一个柱子不接雨水
      continue
    }
    for (let j = i + 1; j < len; j++) { // 寻找右边柱子的最高高度
      if (height[j] > rHeight) rHeight = height[j]
    }
    for (let k = i - 1; k >= 0; k--) { // 寻找左边柱子的最高高度
      if (height[k] > lHeight) lHeight = height[k]
    }
    let h = Math.min(lHeight, rHeight) - height[i] // 当前列雨水高度
    if (h > 0) sum += h // 累加雨水
  }
  return sum
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))

/**
 * 动态规划解法
 * 解析：为了得到两边的最高高度，使用了双指针来遍历，每到一个柱子都向两边遍历一遍，这其实是有重复计算的。我们把每一个位置的左边最高高度记录在一个数组上（maxLeft），右边最高高度记录在一个数组上（maxRight）。这样就避免了重复计算，这就用到了动态规划。
 * @param {*} height 
 */
function trap2(height) {
  const len = height.length
  if (len <= 2) return 0
  const maxLeft = new Array(len).fill(0)
  const maxRight = new Array(len).fill(0)

  // 记录每个柱子左边柱子最大高度
  maxLeft[0] = height[0]
  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
  }

  // 记录每个柱子右边柱子最大高度
  maxRight[len - 1] = height[len - 1]
  for (let j = len - 2; j >= 0; j--) {
    maxRight[j] = Math.max(height[j], maxRight[j + 1])
  }

  // 求和
  let sum = 0
  for (let k = 0; k < len; k++) {
    let h = Math.min(maxLeft[k], maxRight[k]) - height[k]
    if (h > 0) sum += h
  }

  return sum

}

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap2([4, 2, 0, 3, 2, 5]))