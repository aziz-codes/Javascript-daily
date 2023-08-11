// file for validation
const textEl = document.getElementById("textEl");

let name = textEl.value;
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", () => {
  console.log(textEl.value);
});
