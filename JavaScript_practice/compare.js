let age = 25;

// * 모든 코드에 필수로 === 를 씁니다.
console.log(age === 25);
console.log(age === "25"); // "25" -> string type까지 비교하여 false 반환
console.log(age == "25"); // value가 동일하기 때문에 true 반환

// switch-case 문

// *실제 사용하는 경우
// Server에서 데이터 값을 분류하는 경우
// 0 : 상의, 1 : 하의, 2 : 수영복
// 카테고리로 분류할때
// Number < String => Number의 byte가 작다. indexing

// *장점
// 검색이 훨씬 용이 합니다.
// 속도를 빠르게 올릴 수 있다.

// 분류의 오류를 줄이고 깔끔하게 분류할 수 있다.
// category number = 1
// category number = 2

let category = 1;

function Category(category) {
  switch (category) {
    case 0:
      console.log("전체 상의입니다.");
      break;

    case 1:
      console.log("전체 하의입니다.");
      break;

    case 2:
      console.log("전체 수영복입니다.");
      break;
  }
}

console.log(Category(category));

let score = 100;

if (score === 100) {
  console.log("축하합니다 A 입니다.");
} else if (score === 80) {
  console.log("축하합니다 B 입니다.");
} else {
  console.log("분발하세요.");
}

switch (score) {
  case 100:
    console.log("축하합니다 A 입니다.");
    break;

  case 80:
    console.log("축하합니다 B 입니다.");
    break;

  case 60:
    console.log("분발하세요.");
    break;
}
