// callback => promise
// 동기, 비동기

let a = 1;
let b = 2;

function A() {
  let b = "b";
  console.log(a, b);
  B();
}

function B() {
  let c = "c";
  console.log(a, b, c);
}

function A() {}
/*
function A() {
  function B() {
    let c = "c";
    console.log(a, b, c);
  }

  let b = "b";
  console.log(a, b);
  // B();
}
*/

A();
