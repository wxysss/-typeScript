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