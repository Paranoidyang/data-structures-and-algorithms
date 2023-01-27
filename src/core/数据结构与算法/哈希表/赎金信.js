/**
 * 题目描述：给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * 示例：
 * canConstruct("a", "b") -> false
   canConstruct("aa", "ab") -> false
   canConstruct("aa", "aab") -> true
 */

/**
 * Map解法：使用map的空间消耗要比数组大一些的，因为map要维护红黑树或者哈希表，而且还要做哈希函数，是费时的！
 * 判断ransomNote能否由magazine里的字符构成
 * @param {*} ransomNote 
 * @param {*} magazine 
 */
function canConstruct(ransomNote, magazine) {
  // 将magazine转成map，记录每个字母出现的次数
  const magazineMap = new Map()
  for (const i of magazine) {
    let count = magazineMap.get(i) || 0
    magazineMap.set(i, count + 1)
  }
  for (const i of ransomNote) {
    // 如果map中找不到字母，或者字母出现的次数为0，则直接return false
    if (!magazineMap.has(i) || magazineMap.get(i) === 0) {
      return false
    }
    // 如果map中有对应的字母，则将字母出现的次数减1，并记录
    let count = magazineMap.get(i)
    magazineMap.set(i, count - 1)
  }
  return true
}

/**
 * 数组法
 * @param {*} ransomNote 
 * @param {*} magazine 
 */
function canConstruct(ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt()
  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base
    if (!strArr[index]) return false
    strArr[index]--
  }
  return true
}

// 测试
console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))