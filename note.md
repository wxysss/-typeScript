# TypeScript学习
## ts入门
简介:js超集，可以使用js之外的扩展语法，ts更良好的支持面向对象和静态类型，可开发更健壮更可维护的大型项目

![image-20220807143115767](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807143115767.png)
* 非异常故障
错别字
未调用函数
基本逻辑错误

![image-20220807153653145](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807153653145.png)

```js
tsc 文件名 //编译ts文件为js文件
node 文件名 //运行编译后的js文件
```

![image-20220807155542092](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807155542092.png)

```js
* 优化编译
1、解决TS和JS冲突问题
tsc --init #生成配置文件tsconfig.json
2、自动编译/修改后重新编译
tsc --watch
3、发出错误
tsc --noEmitOnError --watch //当出现错误时不被编译成js文件，直到修改完成

```

* 显示类型

  ```js
  function greet(person:string, data:Date){
      console.log(`Hello ${person},today is ${date}`);
  }
  
  ```
* 降级编译
```js
tsconfig.json:
  /* Language and Environment */
"target":"es5" //兼容浏览器
```
* 严格模式
```js
/*Type Checking*/
"strict":true,//可以实现下面两项的检验
"noImplicitAny":true,
"strictNullChecks":true
```
## ts常用类型
* 基元类型
string=>字符串=》Hello, World
number=>数字=》42，-100
boolean=>布尔=》true/false
* 数组
```JS
type[]
Array<type>
// 数组的两种写法
let arr: number[] = [1, 2, 3] //数组里面的每个元素都必须是数字类型
// arr = ['a'] //报错：Type 'string' is not assignable to type 'number'
let arr2: Array<number> = [4, 5, 6] //数组里面的每个元素都必须是数字类型
// arr2 = ['b'] //报错：Type 'string' is not assignable to type 'number'

```

![image-20220807200352591](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807200352591.png)

* any 不希望某个特定值导致类型检查错误，当值类型为any时，可以访问它的任何属性

![image-20220807202827085](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807202827085.png)
* 变量上的类型注释(冒号+类型)
let myName:string = 'Felixlu 
* 当不写类型时，ts会自动推断类型
* ![image-20220807203332231](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807203332231.png)
* 函数(ts允许我们指定函数的输入和输出值的类型)
```js
function greet(name:string):void{
  console.log('hello,'+name)
}
// void表示没有返回值
```
![image-20220807203553746](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807203553746.png)

```js
//参数类型注释
function greet(name: string) {
  console.log('Hi,' + name.toUpperCase() + '!!');

}
greet('美羊羊')
// 返回值类型注释
function getFavoriteNumber(): number {
  return 26
}
getFavoriteNumber()
// 匿名函数：当一个函数出现在可以确定他如何被调用的地方的时候，这个函数的参数会自动指定类型
const names = ['小花', '小美', '小轩']
names.forEach(function
  (s) {
  console.log(s.toUpperCase());
})
// 箭头函数也可以推断类型
names.forEach(function
  (s) {
  console.log(s.toUpperCase());

})
// 总结：即使没有给s定义显示的类型注释，ts也会使用forEach函数的类型，以及数组的字符串类型，来推断出s的类型，这个过程称之为上下文类型，因为函数发生在上下文通知他应该具有什么类型上面
```
* 对象类型(带有任何属性的js值都可以看作为对象，定义对象类型，只需要列出属性和他的类型即可)
```js
function printCoord(pt:{x:number;y:number}){
  console.log("坐标值的x值为:"+pt.x)
  console.log("坐标值的y值为:"+pt.y)
}
printCoord({x:3,y:7})
```
![image-20220807210402930](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220807210402930.png)

```js
* 参数可以不传 (加个？)
function printName(obj: { first: string, last?: string }) {
  // 由于last不传值时为undefiend，传其他值时类型不正确，都会报错
  // 法1：
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  // 法2：
  console.log(obj.last?.toUpperCase());
}
printName({ first: 'xi' })
```
* 联合类型(union类型)（两个或者多个其他类型组成的类型）
```js
//let id:number|string 

function printId(id: number | string | number[]) {
  // 通过typeof进行值类型判断
  if (typeof id === 'string') {
    console.log('id' + id.toUpperCase());
  } else {
    console.log('id' + id);
  }

}
// 可传数字和字符类型，其他类型不可以
printId(101)
printId('222')
// 不支持
// printId({
//   MyId: 11111
// })


// slice()方法,数组和字符串都有
// 返回值注释也支持联合类型
function getFirstThree(x: number[] | string): number[] | string {
  return x.slice(0, 3)
}
console.log(getFirstThree('abcdefg'));
console.log(getFirstThree([1, 2, 3, 4, 5, 6]));

//总结：使用联合类型时，要注意满足多种类型的共同条件，否则就需要分别进行条件处理
```
* 类型别名(type 别名 = 类型) ，别名首字母大写
```js
type Point = {
  x:number;
  y:number;
}
type ID = number | string
type UserInputSanitizedString = string

**实例**
// 基本类型
type Point = {
  x: number
  y: number
}
function printCoord1(pt: Point) {

}
printCoord1({
  x: 100,
  y: 200
})
// 联合类型
type ID = number | string
function printId1(id: ID) {

}
// 返回值类型注释
type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2)
}
let userInput = sanitizedInput('hello')
```
* 接口
```js
interface Point{
  x:number;
  y:number;
}
function printCoord(pt:Point){
  console.log("坐标x的值是:"+pt.x)
  console.log("坐标y的值是:"+pt.y)
}
printCoord({x:100,y:100})
* 1.扩展方式（接口与type方式相似）
// 接口的扩展（extends）
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear: Bear = {
  name: 'wine',
  honey: true
}
console.log(bear.name);
console.log(bear.honey);
// // 类型别名的扩展（交叉扩展 &）
type Animal2 = {
  name: string
}
type Bears = Animal2 & {
  honey: boolean
}
const bear2: Bears = {
  name: 'vivi',
  honey: true
}
console.log(bear2.name);
console.log(bear2.honey);


* 2.向现有的类型添加字段

// 2.向现有的类型添加字段
// 接口（会合并）
interface MyWindow {
  count: number
}
interface MyWindow {
  title: string
}

const w: MyWindow = {
  title: '标题',
  count: 100
}
// type(类型创建后不能更改，不能通过同一个名称去扩展类型)
type MyWindow2 = {
  title: string
}
type MyWindow2 = {
  count: number
}
// 总结：可以通过interface接口的方式去定义类型,通过接口定义的类型同样能通过type去定义
// 1.扩展接口的方式：
// interface 的扩展方式，是在interface后加关键字extends，去扩展接口
// 类型别名的type的拓展方式是通过&拓展接口
// 2.向现有的类型添加字段
// interface可以通过同名添加，type不可以
//  type(类型创建后不能更改，不能通过同一个名称去扩展类型)
```
* 类型断言(对于未知类型)
```js
// 第一种 as 具体类型
const myCanvas = document.getElementById("main_canvas") as  HTMLCanvasElement
// 第二种 <具体类型>
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas") 
// 实例
const x = ("hello" as any) as number
const y = ("hello" as unknown) as number
// 总结：类型断言可以断言为一个差不多的类型，而不是只使用any，否则就失去了使用ts的意义
（any类型 或者unknown类型）
```
* 文字类型
![image-20220808213114857](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220808213114857.png)
```js
let testString = 'hello world'
testString = 'uuuuu'

const constanString = 'Hello World'
// constanString = ''
let x1: 'hello' = 'hello'
// x1 = 'world' //类型 '"world"' 不能分配给类型 '"hello"'。

// 1.字符串文字类型的应用(传入的alignment的参数只能是 'left' ， 'right' ，'center'三个中的一个)

function printText(s: string, alignment: 'left' | 'right' | 'center') {
}
printText('hi', 'left')

// 2.数字文字类型的应用(// 返回值只能是-1，0，1三个中的一个)
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}

interface Options {
  width: number
}
function cofigure(x: Options | 'auto') {

}
cofigure({
  width: 100
})
cofigure('auto')
// cofigure('automatic')

// 布尔文字类型（只能是类型true/false）
let b1: true = true
let b2: false = false

// 文字推理
const obj1 = {
  count: 0
}
if (true) {
  obj1.count = 1
}
function handleRequest(url: string, method: 'GET' | 'POST' | 'SUCCESS') {

}
// 断言文字类型
const req = {
  url: 'http://example.com',
  method: 'GET' as 'GET'
}
handleRequest(req.url, req.method as 'GET')
// 总结：文字类型对于细化文字很有用
```
* null 与 unfined类型
![image-20220809132235301](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809132235301.png)

```js

let xx: undefined = undefined
let yy: null = null
// let zz:string = undefined

function doSomething(x: string | null) {
  if (x === null) {
    // ...
  } else {
    console.log('hello,' + x.toUpperCase());

  }
}
// ？表示参数可选
function liveDangerously(x?: number | null) {
  // !表示你知道该值不可能为null或者undefined时的断言，不建议过多使用，可能带来一些问题
  console.log(x!.toFixed());

}
```
* 枚举（使用关键字enum 枚举名 {枚举常量}）
  调用方法：枚举名.枚举常量

  ![image-20220809133705025](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809133705025.png)
```js
  enum Direction {
  up = 1,
  down,
  left,
  right

}
console.log(Direction.up);
console.log(Direction.down);
//总结：枚举会根据默认值依次赋值,枚举不是类型
```
* 不太常用的原语

![image-20220809134135605](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809134135605.png)


```js
const oneHundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n

const firstName = Symbol("name")
const lastName = Symbol("name")
// 此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof lastName" 没有重叠。
if (firstName === lastName) {
  console.log('ok');

}
// 本章总结：基元类型=》string、number、boolean
              // 数组、any
              // 变量上的类型注释、函数、对象类型、联合类型、类型别名、接口、类型断言、文字类型、null和undefiend、枚举以及不太常用的原语

```
## 类型缩小
* 类型缩小——从宽类型转化为窄类型的过程，常用于处理联合类型变量的场景

  ![image-20220809141233766](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809141233766.png)
  * 第一种：typeof类型守卫
  ```js
  typeof strs === "object"
  ```

![image-20220809141434239](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809141434239.png)

```js
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);

    }
  } else if (strs === 'string') {
    console.log(strs);

  } else {
    // ...
  }
}
```
* 第二种，真值缩小(流行，尤其在防范null或者undefiend之类的值的时候)
js中真值检查方法：条件、&&、||、if语句、布尔否定（!）等形成布尔表达式

//条件

![image-20220809143611586](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809143611586.png)

//Boolean()方法

//推荐!!的方式，第一个！转换为文字类型，另一个！转换为true/false

![image-20220809143634685](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809143634685.png)

```js
//&& 
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);

    }
  } else if (strs === 'string') {
    console.log(strs);

  } else {
    // ...
  }
}
//布尔否定（!）
function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values
  } else {
    return values.map((x) => {
      return x * factor
    })
  }
}
console.log(multiplyAll([3, 4], 2)); //[ 6, 8 ]
console.log(multiplyAll(undefined, 2)); //undefined

```
* 第三种 等值缩小（分支语句===, !==, ==,!=）
```js

interface Container {
  value: number | null | undefined
}
function multiplyValue(container: Container, factor: number) {
  // 宽松的等值判断
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor

  }
}
multiplyValue({ value: 5 }, 6)
multiplyValue({ value: undefined }, 6)
multiplyValue({ value: null }, 6)
```
* in操作符缩小(利用as断言为更具体的类型。)

![image-20220809151826653](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809151826653.png)

```js
type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}
type Human = {
  swim?: () => {

  };
  fly?: () => {

  }
}

function move(animal: Fish | Bird | Human) {
  // 用as断言为更具体的类型。
  if ('swim' in animal) {
    // animal:可能是Fish|Human
    return (animal as Fish).swim()
  }
  // animal:可能是Bird|Human
  return (animal as Bird).fly()
}
```
* instanceof 操作符缩小
<!-- x instanceof Foo -->
```js
"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date());
logValue("hello ts");

```
* 分配缩小(为任何值赋值时，ts会看赋值的右侧，并适当缩小左侧)
```js
// x是string|number联合类型
let x = Math.random() < 0.5 ? 10 : 'Hello World'

// x是number类型
x = 1
console.log(x);


// x是string类型
x = 'good'
console.log(x);


// x是boolean类型(不允许，只分配number/string类型)
// x = true
// console.log(x);

```
* 控制流分析

![image-20220809155020830](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809155020830.png)

```js
function example2() {
  let x: string | number | boolean
  x = Math.random() < 0.5
  // x:boolean
  console.log(x);
  if (Math.random() < 0.5) {
    x = 'hello'
    // x:string
    console.log(x);
  } else {
    x = 100
    // x:number
    console.log(x);

  }

  return x
}
let x2 = example2()
x2 = 'hello'
x2 = 100

// x2 = true //不能将类型“boolean”分配给类型“string | number”。(对boolean类型的赋值已经被覆盖)

```
* 使用类型谓词

![image-20220809161217271](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809161217271.png)

![image-20220809161724504](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809161724504.png)

![image-20220809162349791](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809162349791.png)

//总结：typeof类型守卫 、真值缩小、等值缩小、in操作符缩小、instance操作符缩小、分配缩小、控制流分析、适用类型谓词、受歧视的unios、never类型与穷尽性检查

## ts函数
* 函数类型表达式
```js
//语法：fn:(a:string)=>void

type GreetFunction = (a: string) => void
function greeter(fn: GreetFunction) {
  fn('Hello,World')
}
function printToConsole(s: string) {
  console.log(s);

}
greeter(printToConsole)
```
* 调用签名
```js
type DescribableFunction = {
  description:string;
  (someArg:number):boolean;
}

```

![image-20220809204226864](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809204226864.png)

```js
type DescribableFunction = {
  description: string,
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + 'returned' + fn(6));

}
function fn1(n: number) {
  console.log(n);
  return true

}
fn1.description = 'hello'
doSomething(fn1)
```
* 构造签名
```js
type SomeConstructor = {
  new(s:string):Ctor
}
```
* 泛型函数（两个值之间存在的对应关系，保持输入输出类型一致）

![image-20220809214241520](C:\Users\qwe\AppData\Roaming\Typora\typora-user-images\image-20220809214241520.png)
