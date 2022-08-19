class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}
type SomeConstructor = {
  new(s: string): Ctor
}
function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}
const f = fn(Ctor)
console.log(f.s);
