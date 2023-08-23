function ArrayManipulator(array) {
  function addElement(element) {
    // 예시 코드입니다.
    // 변환된 배열을 `ArrayManipulator`의 인자로 넘겨 리턴합니다.
    return ArrayManipulator([...array, element]);
  }

  function removeElement(index) {
    // 인자를 제거한 배열을 만들어주세요.
    // [1, 2, 3, 4]
    // index -> 0
    return ArrayManipulator([
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ]);
  }

  function updateElement(index, element) {
    // 인자를 갱신한 배열을 만들어주세요.
    return ArrayManipulator([
      ...array.slice(0, index),
      element,
      ...array.slice(index + 1),
    ]);
  }

  function mapElements(func) {
    // 배열 전체를 변환하세요.
    // Array 객체의 내장 map 함수를 활용해 보세요.
    return ArrayManipulator(array.map(func));
  }

  function filterElements(func) {
    // 배열의 특정 원소를 필터하세요.
    // Array 객체의 내장 filter 함수를 활용해 보세요.
    return ArrayManipulator(array.filter(func));
  }

  function getArray() {
    return array;
  }

  return {
    addElement,
    removeElement,
    updateElement,
    mapElements,
    filterElements,
    getArray,
  };
}

export default ArrayManipulator;
