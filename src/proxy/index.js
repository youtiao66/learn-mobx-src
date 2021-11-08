const person = { name: '张三' }

const proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new Error(`Prop name ${propKey} does not exists`)
    }
  }
})

console.log(proxy.name)
// console.log(proxy.age)
