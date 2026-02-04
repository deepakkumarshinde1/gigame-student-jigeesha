class Shape {
  constructor(name) {
    this.name = name;
  }
  getName() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}

const shape = new Shape("MyShape");
// shape.getName();

const user = { name: "Amit", age: 25 };
const { name: studentName, age } = user;
console.log(studentName);

console.clear();
let id = Symbol("id");

let id1 = Symbol("id");

console.log(id === id1);

let student = {
  [id]: 123,
  name: "Amit",
  age: 25,
};

for (let key in student) {
  console.log(key);
}
