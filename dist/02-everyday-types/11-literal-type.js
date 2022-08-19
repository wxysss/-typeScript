"use strict";
let testString = 'hello world';
testString = 'uuuuu';
const constanString = 'Hello World';
// constanString = ''
let x1 = 'hello';
// x1 = 'world' //类型 '"world"' 不能分配给类型 '"hello"'。
// 1.字符串文字类型的应用(传入的alignment的参数只能是 'left' ， 'right' ，'center'三个中的一个)
function printText(s, alignment) {
}
printText('hi', 'left');
// 2.数字文字类型的应用(// 返回值只能是-1，0，1三个中的一个)
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function cofigure(x) {
}
cofigure({
    width: 100
});
cofigure('auto');
// cofigure('automatic')
// 布尔文字类型（只能是类型true/false）
let b1 = true;
let b2 = false;
// 文字推理
const obj1 = {
    count: 0
};
if (true) {
    obj1.count = 1;
}
function handleRequest(url, method) {
}
// 断言文字类型
const req = {
    url: 'http://example.com',
    method: 'GET'
};
handleRequest(req.url, req.method);
// 总结：文字类型对于细化文字很有用
