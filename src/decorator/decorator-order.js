/**
 * 如果同一个方法有多个装饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
 * 顺序装饰
 * 逆序执行
 * => evaluated 1
 * => evaluated 2
 * => executed 2
 * => executed 1
 */
 function dec(id) {
  console.log('evaluated', id)
  return (target, name, descripter) => {
    console.log('executed', id)
    return descripter
  }
}

class Example {
  @dec(1)
  @dec(2)
  method() {}
}