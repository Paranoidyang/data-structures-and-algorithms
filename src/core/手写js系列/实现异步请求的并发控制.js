/**
 * 控制请求并发数，比如在大文件上传场景中，当文件很大时，量上传所有切片会导致浏览器卡死，这时就可以采用控制请求并发的方式进行上传
 * 原理：通过并发数max来管理并发数，发起一个请求max--，结束一个请求max++即可
 * 假设forms是以下格式：
 * const forms = [
    {
      form: {...},
      index: 0
    },
    {
      form: {...},
      index: 1
    }
  ]
 */
export default function () {
  async function sendRequest(forms, max = 4) {
    return new Promise(resolve => {
      const len = forms.length;
      let idx = 0;
      let counter = 0;
      const start = async () => {
        // 有请求，有通道
        while (idx < len && max > 0) {
          max--; // 占用通道
          console.log(idx, "start");
          const form = forms[idx].form;
          idx++
          request({
            url: '/upload',
            data: form,
          }).then(() => {
            max++; // 释放通道
            counter++;
            if (counter === len) {//全部上传成功
              resolve();
            } else {//通道释放后，后续请求立马顶上
              start();
            }
          });
        }
      }
      start();
    })
  }
}