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
