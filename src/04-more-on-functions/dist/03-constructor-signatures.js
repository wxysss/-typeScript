"use strict";
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor) {
    return new ctor('hello');
}
const f = fn(Ctor);
console.log(f.s);
