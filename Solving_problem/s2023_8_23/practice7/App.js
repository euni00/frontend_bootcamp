import "./app.css";
import ArrayManipulator from "./ArrayManipulator";

const generateRandomNumber = () => parseInt(Math.random() * 100, 10);
const generateResultString = (dom, data) =>
  (dom.innerHTML = `결과 : ${JSON.stringify(data)}`);

const App = () => {
  const addButton = document.getElementById("add-button");
  const deleteButton = document.getElementById("delete-button");
  const updateButton = document.getElementById("update-button");
  const mapButton = document.getElementById("map-button");
  const filterButton = document.getElementById("filter-button");

  let am = ArrayManipulator([1, 2, 3, 4, 5]);
  const currentValue = document.getElementById("current-value");
  const result = document.getElementById("result");

  currentValue.innerHTML = `초기 배열 : ${JSON.stringify(am.getArray())}`;

  addButton.addEventListener("click", () => {
    am = am.addElement(generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  deleteButton.addEventListener("click", () => {
    am = am.removeElement(0);
    generateResultString(result, am.getArray());
  });

  updateButton.addEventListener("click", () => {
    am = am.updateElement(0, generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  mapButton.addEventListener("click", () => {
    am = am.mapElements((item) => item * 2);
    generateResultString(result, am.getArray());
  });

  filterButton.addEventListener("click", () => {
    am = am.filterElements((item) => item % 2 === 0);
    generateResultString(result, am.getArray());
  });
};

export default App;
