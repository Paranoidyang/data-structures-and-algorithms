/**
 * 判断是否是类数组
 * @param {*} o 
 * @returns 
 */
export const isArrayLike =  (o) => {
  if(o &&                                    // o不是null、undefined等
     typeof o === 'object' &&                // o是对象
     isFinite(o.length) &&                   // o.length是有限数值
     o.length >= 0 &&                        // o.length为非负值
     o.length === Math.floor(o.length) &&    // o.length是整数
     o.length < 4294967296)                  // o.length < 2^32
     return true
  else
     return false
}