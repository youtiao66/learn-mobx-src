function testable(targent) {
  targent.isTestable = true
}

@testable
class MyTestableClass {

}

console.log(MyTestableClass.isTestable)