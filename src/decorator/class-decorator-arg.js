/**
 * 给装饰器添加参数
 */
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable
  }
}

@testable(true)
class MyTestableClass1 {}

@testable(false)
class MyTestableClass2 {}

console.log('MyTestableClass1', MyTestableClass1.isTestable)
console.log('MyTestableClass2', MyTestableClass2.isTestable)
