function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = (a, b) => {
    return this.a + this.b;
  };

  this.mul = (a, b) => {
    return this.a * this.b;
  };

  this.sub = (a, b) => {
    return this.a - this.b;
  };

  this.div = (a, b) => {
    return this.a / this.b;
  };
}

let math = new Calculator(2, 3);

console.log("math.sum : ", math.sum());
console.log("math.mul : ", math.mul());
console.log("math.sub : ", math.sub());
console.log("math.div : ", math.div());
