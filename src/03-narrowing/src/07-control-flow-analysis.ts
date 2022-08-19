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
