/**
 * 题目描述：数组去重
 */

let array = [1, 1, '1', '1'];

// 双重循环
function unique(arr) {
    // res用来存储结果
    var res = [];
    for (const item of arr) {
        for (var i = 0, resLen = res.length; i < resLen; i++) {
            if (item === res[i]) {
                break;
            }
        }
        // 如果item是唯一的，那么执行完循环，i等于resLen
        if (i === resLen) {
            res.push(item)
        }
    }
    return res;
}

console.log(unique(array)); // [1, "1"]