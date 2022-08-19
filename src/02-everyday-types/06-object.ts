function printCoord(pt: { x: number, y: number }) {
  console.log("坐标值的x值为:" + pt.x)
  console.log("坐标值的y值为:" + pt.y)

}
printCoord({ x: 3, y: 7 })

// 参数不一定都要传(加个？)
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