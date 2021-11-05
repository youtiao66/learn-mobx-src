/**
 * 定义一个新属性
 */
 const obj = {}

 Object.defineProperty(obj, 'prop1', {
   value: 42,
   writable: false
 })
 
 obj.prop1 = 77
 
 console.log(obj.prop1)
 // => 42
 