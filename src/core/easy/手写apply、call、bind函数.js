/**
 * 题目描述：apply接收一个参数数组
 *           call接收参数列表
 *           bind接收参数与call一致，但是返回一个函数，不立即执行
 */

import  { isArrayLike } from '@/utils/index'
export default function () {
  Function.prototype.myApply = function (context, args){
    //防止myApply的this被改变为非函数，如通过xxxfunction.myApply.call({})，this在后面是要被执行并将其结果返回的
    if(typeof this !== 'function'){
        throw new TypeError(this + ' is not a function');
    }
    //不能context = context || window，当context为0时，原生的call和apply是会将其转换为包装对象的
    if(context === undefined || context === null){
        context = window;
    }
    //表示不需要传入任何参数，置为空数组即可
    if(args === undefined || args === null){
        args = [];
    }
    //第二个参数必须是数组或类数组
    if(!Array.isArray(args) && !isArrayLike(args)){
        throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    //统一转成对象，包括基本数据类型
    context = new Object(context);
  
    //Symbol()用来避免覆盖context已有属性
    let _fn =  Symbol('fn')
    //兼容context为不可扩展对象的场景
    let ctx = Object.assign({}, context, {[_fn]: this})
    //类数组转成数组
    args = isArrayLike(args) ? Array.from(args) : args
    let result = ctx[_fn](...args)
    delete ctx[_fn]
    return result;
  };

  //手写call函数只需要将传参的args改成收集参数...args即可
  //手写bind函数只需要将最后的核心代码放在一个function中return即可，不立即执行
  
  
  function test() {console.log(this.name)}
  //不可扩展的对象
  // let obj = Object.preventExtensions({name: '张三'})
  // test.myApply(obj, [])
  test.myApply(null, {0: 1,length: 0})
}

