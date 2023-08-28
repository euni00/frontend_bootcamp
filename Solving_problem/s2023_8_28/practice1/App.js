import "./app.css";
import Counter from "./Counter";

const App = () => {
  const syncButton = document.getElementById("sync");
  const asyncButton = document.getElementById("async");
  const result = document.getElementById("result");
  const blink = document.getElementById("blink");
  blink.style.width = "100px";
  blink.style.height = "100px";
  blink.style.background = "red";
  blink.style.marginTop = "12px";

  setInterval(() => {
    blink.style.background = blink.style.background === "red" ? "blue" : "red";
  }, 500);

  syncButton.addEventListener("click", () => {
    Counter.incrementSync();
    result.innerHTML = Counter.getCount();
  });

  asyncButton.addEventListener("click", () => {
    Counter.incrementAsync(() => {
      result.innerHTML = Counter.getCount();
    });
  });

  result.innerHTML = 0;
};

export default App;
