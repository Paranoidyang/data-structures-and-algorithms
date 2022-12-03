/**
 * 实现一个批量请求函数 multiRequest(urls, max)，要求如下：
    • 要求最大并发数 max
    • 每当有一个请求返回，就留下一个空位，可以增加新的请求
    • 所有请求完成后，结果按照 urls 里面的顺序依次打出

   控制请求并发数，比如在大文件上传场景中，当文件很大时，量上传所有切片会导致浏览器卡死，这时就可以采用控制请求并发的方式进行上传
   原理：通过并发数max来管理并发数，发起一个请求max--，结束一个请求max++即可。
 */
export default function () {
  function multiRequest(urls = [], max) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;

    return new Promise(resolve => {
      // 请求max个
      while (count < max) {
        next();
      }
      function next() {
        let current = count++;
        // 处理边界条件
        if (current >= len) {
          // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
          !result.includes(false) && resolve(result);
          return;
        }
        const url = urls[current];
        console.log(`开始 ${current}`, new Date().toLocaleString());
        fetch(url)
          .then((res) => {
            // 保存请求结果
            result[current] = res;
            console.log(`完成 ${current}`, new Date().toLocaleString());
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          })
          .catch((err) => {
            console.log(`结束 ${current}`, new Date().toLocaleString());
            result[current] = err;
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          });
      }
    });
  }

  let urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => `https://mcs.snssdk.com/list?index=${idx}`)
  multiRequest(urls, 2).then(res => console.log('全部请求成功', res))
}