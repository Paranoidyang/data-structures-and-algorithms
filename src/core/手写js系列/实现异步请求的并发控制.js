/**
 * 实现一个能批量发送请求，并能控制请求并发数的函数 multiRequest(urls, max)，要求如下：
    • 要求最大并发数 max
    • 每当有一个请求返回，就留下一个空位，可以增加新的请求
    • 所有请求完成后，结果按照 urls 里面的顺序（或者按照请求返回的顺序）依次打出

   场景：如大文件上传场景中，当文件很大时，一次性上传所有切片（几百个http请求）会导致浏览器卡死，这时就可以采用控制请求并发的方式进行上传
   原理：通过并发数max来管理并发数，发起一个请求max--，结束一个请求max++。

   如果想要实现按接口返回的顺序输出结果，则只修改两行代码即可：
   const result = new Array(len).fill(false) ----》const result = []
   result[current] = urls[current].res ------》result.push(urls[current].res)

 */

function multiRequest(urls = [], max = 5) {
  const len = urls.length // 请求总数量
  const result = new Array(len).fill(false) // 如果需要按urls的顺序输出结果的话，则根据请求数量创建一个数组来保存请求的结果
  let idx = 0 // 当前请求url的索引
  let succssCounter = 0 // 已成功请求数量

  return new Promise(resolve => {
    const start = async () => {
      while (idx < len && max > 0) { // 有请求，有通道
        let current = idx
        max-- // 占用通道
        idx++
        const url = urls[current].url
        console.log(current, '开始')
        fetch(url).then(() => {
          console.log(current, '结束')
          max++ // 释放通道
          succssCounter++ // 请求成功数+1
          result[current] = urls[current].res // 按urls的原顺序，push进result
          if (succssCounter === len) { // 请求全部发送成功，返回结果
            resolve(result)
          } else {
            start()
          }
        })
      }
    }
    start()
  })
}

// 测试
let urls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
  {
    url: `https://mcs.snssdk.com/list?index=${idx}`,
    res: `res${idx}`
  }
))
multiRequest(urls, 5).then(res => console.log('全部请求成功', res))