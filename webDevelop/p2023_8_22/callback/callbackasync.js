// 1 ) 배달 주문이 들어왔어요
// 2 ) 결제
// 3 ) 결제 완료
// 4 ) 배달 오더가 들어갑니다
// 5 ) 배달 or 취소

console.log("주문이 들어왔어요."); // 1

/*
function orderCallBack() {
  console.log("결제 진행중");  // 2
  setTimeout(() => {
    console.log("결제완료");  // 3
  }, 3000);
}
*/

function orderCallBack(print, timeout) {
  setTimeout(print, timeout);
}

console.log("결제진행중");
orderCallBack(() => console.log("결제완료"), 2000);
console.log("배달시작");

// async - await

// goroutine , coroutine {kotilin}

/*
orderCallBack();
console.log("배달 시작"); // 4
*/

// JavaScript

// 1 ) 비동기성. asynchronous -> 코드가 순차적으로 실행 X
// 2 ) 싱글스레드 -> 한 스레드 처리가 빠르다.
