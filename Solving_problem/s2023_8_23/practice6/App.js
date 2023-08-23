import "./app.css";
import RotationEncryptor from "./RotationEncryptor";

const App = () => {
  const encryptButton = document.getElementById("encrypt-button");
  const input = document.getElementById("message");
  const result = document.getElementById("result");

  encryptButton.addEventListener("click", () => {
    RotationEncryptor.setMessage(input.value);
    RotationEncryptor.setRotation(10);
    result.innerHTML = `결과 : ${RotationEncryptor.encrypt()}`;
  });
};

export default App;
