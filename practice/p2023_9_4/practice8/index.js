const adder_promise = require("./promise");

function main_promise(a, b, c, d) {
  Promise.all([adder_promise(a, b), adder_promise(c, d)])
    .then(([r1, r2]) => {
      return adder_promise(r1, r2);
    })
    .then((r3) => {
      console.log(`${a}+${b}+${c}+${d}=${r3}`);
    });
}

/* 1. main 을 async 함수로 선언 */
async function main(a, b, c, d) {
  /* 2. 두 promise 함수를 동시에 실행하여 결과를 r1, r2에 저장 */
  // const [r1, r2] = await main_promise(a, b, c, d); -> O
  const [r1, r2] = await Promise.all([
    adder_promise(a, b),
    adder_promise(c, d),
  ]);

  /*3. r1 과 r2 를 한번 더 adder_promise 로 실행 */
  const r3 = await adder_promise(r1, r2);
  console.log(`${a}+${b}+${c}+${d}=${r3}`);
}

main(1, 2, 3, 4);
