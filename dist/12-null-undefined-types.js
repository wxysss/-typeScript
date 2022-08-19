"use strict";
let xx = undefined;
let yy = null;
// let zz:string = undefined
function doSomething(x) {
    if (x === null) {
        // ...
    }
    else {
        console.log('hello,' + x.toUpperCase());
    }
}
// ？表示参数可选
function liveDangerously(x) {
    // !表示你知道该值不可能为null或者undefined时的断言，不建议过多使用，可能带来一些问题
    console.log(x.toFixed());
}
