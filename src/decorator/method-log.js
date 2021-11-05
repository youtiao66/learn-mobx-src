function log(target, name, descriptor) {
  const oldValue = descriptor.value

  descriptor.value = function() {
    console.log('a+b,arguments:', arguments)
    return oldValue.apply(this, arguments)
  }

  return descriptor
}

class MathCls {
  @log
  add(a, b) {
    return a + b
  }
}

const mathCls = new MathCls()
console.log(mathCls.add(1, 3))