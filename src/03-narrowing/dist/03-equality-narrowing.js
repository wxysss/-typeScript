"use strict";
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x, y);
    }
}
function printAll2(strs) {
    if (strs && typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (strs === 'string') {
        console.log(strs);
    }
    else {
        // ...
    }
}
function multiplyValue(container, factor) {
    // 宽松的等值判断
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
multiplyValue({ value: null }, 6);
