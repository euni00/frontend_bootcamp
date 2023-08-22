// JavaScript의 내장 객체
// 내장 객체 : 객체

const now = new Date();

console.log(now);
console.log(typeof now);

console.log("getFullYear: ", now.getFullYear());
console.log("getMonth: ", now.getMonth()); // 7 (0부터 시작)
console.log("getDay", now.getDay());
console.log(now.local);

let park = {
  name: "박",
  age: 30,
};

let lee = {
  name: "이",
  age: 40,
};

function User(name, age) {
  this.name = name;
  this.age = age;
  // this.email = email;
  // this.cardpayinfo = cardpayinfo;
}

console.log("park : ", park);

let newName = new User("park", 40);
let kim = new User("kim", 34);

console.log("newName: ", newName);
console.log("kim : ", kim);
