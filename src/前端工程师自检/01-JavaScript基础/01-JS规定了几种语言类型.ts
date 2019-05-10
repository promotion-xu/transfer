// 1. JavaScript规定了几种语言类型
// string, number, null, undefined, boolean;
// object, array;

// 2. JavaScript 对象的底层数据结构是什么



// 3. 实现一个简单的Symbol;

// var s = Symbol();
// console.log(typeof s); //  "symbol"

// var s1 = Symbol('foo');
// console.log(s1); 

// const obj: any = {
//   toString() {
//     return 'abc';
//   }
// };
// const sym = Symbol(obj);
// console.log(sym);

// var sym: any = Symbol('My symbol');
// console.log( `you symbol is' + ${sym}`);




// var sym = Symbol('My Symbol');
// console.log(String(sym));
// console.log(sym.toString());

var mySymbol = Symbol();
var a: any = {};
a[mySymbol] = 'Hello'






