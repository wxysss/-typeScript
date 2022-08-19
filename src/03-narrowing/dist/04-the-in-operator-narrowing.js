"use strict";
function move(animal) {
    // 用as断言为更具体的类型。
    if ('swim' in animal) {
        // animal:可能是Fish|Human
        return animal.swim();
    }
    // animal:可能是Bird|Human
    return animal.fly();
}
