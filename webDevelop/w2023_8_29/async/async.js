const getData = async () => {
  // await : 이 코드가 끝날때까지 아래 코드로 넘어가지 않음.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
};

getData();

// non-blocking
console.log("결제하기");
console.log("결제 진행중");
setTimeout(() => {}, 3000); // 비동기
console.log("배달 시작");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
  });
