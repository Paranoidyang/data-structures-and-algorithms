export default function () {
  /**
   * 反转字符串
   * @param {*} str 
   * @returns 
   */
  function reverseStr(str) {
    return str.split('').reverse().join('')
  }
  console.log(reverseStr('abcd'))

}

