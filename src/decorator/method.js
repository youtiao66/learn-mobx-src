function readonlyFunc(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Person {
  @readonlyFunc
  name() {
    return `firstname lastname`
  }
}

Person.prototype.name = function() {
  return 'anothername'
}

const person = new Person()
console.log(person.name())
