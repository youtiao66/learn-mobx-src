/**
 * 添加实例属性
 */
 function testable(target) {
  target.prototype.isTestable = true
}

@testable
class MyTestableClass {}

const instance = new MyTestableClass()

console.log(instance.isTestable)
