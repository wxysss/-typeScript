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