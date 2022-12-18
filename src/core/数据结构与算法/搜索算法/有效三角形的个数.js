/**
 * 题目描述：给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。
 * 
 * 示例1:
 *  输入: nums = [2,2,3,4]
    输出: 3
    解释:有效的组合是: 
    2,3,4 (使用第一个 2)
    2,3,4 (使用第二个 2)
    2,2,3

  示例2：
    输入: nums = [4,2,3,4]
    输出: 4

  分析：三角形两边之和大于第三边。
  对于正整数 a, b, ca,b,c，它们可以作为三角形的三条边，当且仅当： 
      a+b>c
      a+c>b
      b+c>a
  均成立。如果我们将三条边进行升序排序，使它们满足 a≤b≤c，那么 a+c>b、b+c>a 是一定成立的，我们只需要保证 a+b>c。

  因此，我们可以将数组 nums 进行升序排序，随后使用二重循环枚举 a 和 b。设 a=nums[i],b=nums[j]，为了防止重复统计答案，我们需要保证 i < j。剩余的边 c 需要满足 c < nums[i]+nums[j]，我们可以在 [j + 1, n - 1]的下标范围内使用二分查找（其中 n 是数组 nums 的长度），找出最大的满足 nums[k]<nums[i]+nums[j] 的下标 k，这样一来，在 [j + 1, k] 范围内的下标都可以作为边 c 的下标，我们将该范围的长度 k - j 累加入答案。

  当枚举完成后，我们返回累加的答案即可。

  时间复杂度：O(n^2 * log n)
  空间复杂度：O(logn)，即为排序需要的栈空间。

 */

/**
 * 排序 + 二分查找
 * @param {*} nums 
 * @returns 
 */
function triangleNumber(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let left = j + 1, right = n - 1, k = j;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[i] + nums[j]) {
          k = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      ans += k - j;
    }
  }
  return ans;
};

console.log(triangleNumber([2, 2, 3, 4]))
console.log(triangleNumber([4, 2, 3, 4]))