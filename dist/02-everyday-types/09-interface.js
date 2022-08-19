"use strict";
function printCoord2(pt) {
}
printCoord2({ x: 100, y: 200 });
const bear = {
    name: 'wine',
    honey: true
};
console.log(bear.name);
console.log(bear.honey);
const bear2 = {
    name: 'vivi',
    honey: true
};
console.log(bear2.name);
console.log(bear2.honey);
const w = {
    title: '标题',
    count: 100
};
// type(类型创建后不能更改，不能通过同一个名称去扩展类型)
// type MyWindow2 = {
//   title: string
// }
// type MyWindow2 = {
//   count: number
// }
// 总结：可以通过interface接口的方式去定义类型,通过接口定义的类型同样能通过type去定义
// 扩展接口的方式：
// interface 的扩展方式，是在interface后加关键字extends，去扩展接口
// 类型别名的type的拓展方式是通过&拓展
