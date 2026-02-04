console.log("Hi");
setTimeout(function () {
  console.log("Hello");
}, 0);
console.log("Hey");

// promises
async function getClac() {
  let result = true;
  if (result === true) {
    return Promise.resolve(result);
  } else {
    return Promise.reject("Reason");
  }
} // 4s

// pending
// fulfilled
// rejected

getClac()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

let counter = 10;
let intervalId = setInterval(() => {
  console.log(counter);
  if (counter === 0) {
    clearInterval(intervalId);
  }
  counter--;
}, 1000);

class Product {
  constructor(_name) {
    this._name = _name;
  }
  addDetails() {
    console.log(this._name);
  }
}

class Category extends Product {
  constructor(_name) {
    super(_name);
  }
}
// inheritance
//Category.prototype = Object.create(Product.prototype);

let category = new Category("Electronics");

// console.log(category.name)
category.addDetails();

String.prototype.getExtraString = function (cb) {
  let _string = this.toString();
  let result = {
    cap: _string.toUpperCase(),
    small: _string.toLowerCase(),
    length: _string.length,
  };
  cb(result);
};
let text = "deepak";
// capital
// small
// length
text.getExtraString((extra) => {
  console.log(extra);
});
