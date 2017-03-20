/**
 * 
 * @file index.js
 * @author 张三
 * @create 2017-03-17
 * @update 2017-03-18
 * @description
 *     一个样式表的范例，样式表注释应该怎么写
 *     2017-03-17更新： 增加了页面的主要样式
 *     2017-03-18更新 by 李四： 新添组件XX样式编写
 * 
 */

/**
 * 定义变量 name { string } age { intger }
 */
var name = 'zhangsan',
    age = 18


/**
 * @method test
 * @param {string} name 
 * @param {int} age 
 * @function
 *     弹出对话框，显示对应传入参数的提示语
 */
function test(name, age) {
    alert('Hi, ' + name! + 'age: ' + age)
}

//调用test(name, age)
test(name, age)

