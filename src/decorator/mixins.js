/**
 * mixins
 */
function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() { console.log('foo') }
}

@mixins(Foo)
class MyTestClass {}

const mytest = new MyTestClass()
mytest.foo()
