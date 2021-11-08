const double = n => n * 2
const pow = n => n * n
const reverseInt = n => String(n).split('').reverse().join('') | 0

const fnObj = {
  double,
  pow,
  reverseInt
}

const pipe = (n) => {
  const funcStack = []
  const tProxy = new Proxy({}, {
    get: function(target, propKey) {
      if (propKey === 'get') {
        return funcStack.reduce((total, fn) => {
          return fn(total)
        }, n)
      }
      funcStack.push(fnObj[propKey])
      return tProxy
    }
  })

  return tProxy
}

const result = pipe(3).double.pow.reverseInt.get
console.log(result)
