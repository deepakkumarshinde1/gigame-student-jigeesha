console.log(a);
fun();
var a = 10;
function fun() {
  console.log("hello");
}

function parent() {
  let count = 0;
  function child() {
    count++;
    console.log(count);
  }
  return child;
}
console.clear();
let counter = parent();
counter();
counter();
counter();
counter();
counter();
counter();
console.clear();

class MyClass {
  constructor() {}

  fun() {
    let add = () => {
      console.log(this);
    };
    add();
  }
}
console.clear();
let myClass = new MyClass();
myClass.fun();

(() => {})();

function sub(a, b, callback) {
  callback(a - b);
}

sub(10, 5, function (result) {});
