console.log("Hello World");

// 변수 선언과 함수 작성
// var (최근에는 거의 쓰지 않음), let, const

// data type
// Number = 1, 2, 3, 4, 5, 7.5, 8.5
// String = 'hello world'
// Boolean = true, false / 참, 거짓
// Null, Undefined, Object

// foreach()
// switch()
// forEach()
// for()

var age = 25;
let year = 2000;
const point = 7;
const today = "광복절";
const pass = true;

const sale = "7.5";

// 강 타입
console.log(typeof year);
console.log(typeof today);
console.log(typeof pass);

console.log(year + "_" + today); // 2023_광복절 (문자)
console.log("point + sale : ", point + sale); // 2507.5

let stringResult = Number(point) * String(year); // ??
let result = Number(point) * Number(sale);

console.log("stringResult : ", stringResult);
console.log("result : ", result);

console.log("stringResult type : ", typeof stringResult);

// TypeScript => 타입을 강제. compile language
// JavaScript => interpreter language
// 보통의 언어는 오류.. JavaScript에서는 문자로 취급하고 문자열로 연결
// 문자를 숫자로 바꿀 필요가 있을때, 보통 형변환을 사용합니다.

var age = 30;
console.log(age);

year = 3000;
console.log(year);

if (pass) {
  let year = 200;
  console.log(year);
  console.log("Hello");
  console.log("gitgitgit");
}

console.log(year); // 3000

console.log(age);
console.log(year);
console.log(point);
