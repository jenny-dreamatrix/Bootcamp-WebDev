
const keyOutput = document.querySelector(".key-output");
const keycodeOutput = document.querySelector(".keycode-output");
const codeOutput = document.querySelector(".code-output");

const app = () => {
  let key = event.key;
  let keycode = event.keyCode;
  let code = event.code;
  console.log({key});
  keyOutput.innerHTML = key;
  codeOutput.innerHTML = code;
  keycodeOutput.innerHTML = keycode;
}
