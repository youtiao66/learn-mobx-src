/**
 * 类的装饰
 */
function testable(targent) {
  targent.isTestable = true
}

@testable
class MyTestClass {

}

console.log(MyTestableClass.isTestable)