// 第一种 as 具体类型
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
// 第二种 <具体类型>
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas")

const x = ("hello" as any) as number
const y = ("hello" as unknown) as number