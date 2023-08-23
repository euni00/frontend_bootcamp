const Counter = () => {
  // 1.
  let count = 0;
  // Counter 클로저를 작성하세요.

  // 2.
  function getCount() {
    return count;
  }

  // 3.
  function increase() {
    count++;
  }

  // 4.
  function decrease() {
    count--;
  }

  return { getCount, increase, decrease };
};

export default Counter;
