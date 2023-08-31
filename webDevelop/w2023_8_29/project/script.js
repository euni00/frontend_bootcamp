const addForm = document.querySelector(".add");
const list = document.querySelector(".memos");
const alertmsg = document.getElementById("alertmsg");
const search = document.querySelector(".search input");

const saveMemo = (memoText) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${memoText}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const memo = addForm.add.value;
  if (memo.length) {
    saveMemo(memo);
    alertmsg.classList.add("hidden");
  } else {
    //글 내용을 작성하라는 메세지
    // console.log('글 내용을 작성하세요')
    alertmsg.classList.remove("hidden");
  }

  // console.log('글을 남겼습니다');
  //글을 작성하기 위한
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterMemo = (memo) => {
  // Array.from -> 배열 변형 / list.children -> list에 접근 // filtered 클래스가 각 list에 적용

  // console.log(Array.from(list.children));

  Array.from(list.children)
    .filter((memotext) => !memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.add("filtered"));

  Array.from(list.children)
    .filter((memotext) => memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const searchText = search.value;
  // console.log(searchText);
  filterMemo(searchText);
});
