const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("data response");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("First Promise");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Second Promise");

  return data;
};

async function fetchData() {
  console.log("데이터 수신중...");
  const result = await getData();
  console.log(result);
}

setTimeout(() => {
  console.log("결제중");
}, 3000);

setTimeout(() => {
  console.log("배달시작");
}, 2000);

fetchData();
