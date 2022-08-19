
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