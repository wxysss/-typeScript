// //参数类型注释
// function greet(name: string) {
//   console.log('Hi,' + name.toUpperCase() + '!!');

// }
// greet('美羊羊')

// // 返回值类型注释
// function getFavoriteNumber(): number {
//   return 26
// }
// getFavoriteNumber()

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