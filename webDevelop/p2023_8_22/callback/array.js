const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// filter -> callback 함수
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// Expected output: Array ["exuberant", "destruction", "present"]

function callback(element) {
  // return element.length > 6;
  if (element.length > 6) {
    return true;
  } else {
    return false;
  }
}

const result = words.filter(callback);
console.log(result);

// 1 ) 배달 주문이 들어왔어요
// 2 ) 결제
// 3 ) 결제 완료
// 4 ) 배달 오더가 들어갑니다
// 5 ) 배달 or 취소
