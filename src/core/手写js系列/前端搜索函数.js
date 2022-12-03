export default function () {

  /**
   * 通过options中的规则， 判断target是否匹配keyword
   * @param {*} target 匹配目标
   * @param {*} keyword 搜索词
   * @param {*} options 配置项
   */
  function includesKeyword(target, keyword, options) {
    const { exact, ignoreCase } = options
    // 统一转为string，方便使用indexOf匹配
    keyword = keyword.toString()
    // 忽略大小写
    if (ignoreCase) {
      target = target.toLowerCase()
      keyword = keyword.toLowerCase()
    }
    // 精准匹配
    if (exact) {
      return target === keyword
    }
    // 模糊匹配
    return target.indexOf(keyword) !== -1 || keyword.indexOf(target) !== -1
  }
  /**
   * 
   * @param {*} targetList 目标数组，项的类型可以为string|number|object
   * @param {*} keyword 搜索词
   * @param {*} range 搜索范围（当目标数组项为object时才有效，且必须是object中存在的字段）
   * @param {*} options 配置项（ignoreCase：忽略大小写；exact：精准匹配）
   */
  function getSearchResult(targetList, keyword, range = [], options = { exact: false, ignoreCase: true, rangeSort: false }) {
    const result = targetList.filter(target => {
      // 当range为空数组时，支持搜索[1, 2, 3]、['a', 'B', 'b']这类项为number或者string的一维数组
      if (range.length === 0) {
        return includesKeyword(target.toString(), keyword, options)
      } else {
        const isExist = range.some(key => {
          // 如果range有值，而target不是一个对象时，则key无效
          if (typeof target !== 'object') {
            console.error(`${key} is invalid, because targetList item is not a object`)
            return false
          }
          // 如果key不是target中有效的key，则给出错误提示
          if (!(key in target)) {
            console.error(`${String(key)} is not a valid key of the targetList item`)
            return false
          }
          return includesKeyword(target[key].toString(), keyword, options)
        })
        return isExist
      }
    })

    return result
  }

  console.log('搜索结果', getSearchResult([{ name: '水果', age: '水鬼' }, { name: '活鬼', age: '活果' }, { name: '大鬼', age: '活果' }], '鬼', ['name', 'age']))

}