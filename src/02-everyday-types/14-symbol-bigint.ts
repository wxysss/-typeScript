const oneHundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n

const firstName = Symbol("name")
const lastName = Symbol("name")
// 此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof lastName" 没有重叠。
// if (firstName === lastName) {
//   console.log('ok');

// }
// 本章总结：基元类型=》string、number、boolean
              // 数组、any
              // 变量上的类型注释、函数、对象类型、联合类型、类型别名、接口、类型断言、文字类型、null和undefiend、枚举以及不太常用的原语