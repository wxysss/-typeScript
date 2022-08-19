"use strict";
function printAll(strs) {
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
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => {
            return x * factor;
        });
    }
}
console.log(multiplyAll([3, 4], 2)); //[ 6, 8 ]
console.log(multiplyAll(undefined, 2)); //undefined
