const passwordEl = document.getElementById("password");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  passwordEl.type = passwordEl.type === "password" ? "text" : "password";
  btnEl.outerHTML = "hello";
});
// test commit
const btnCheckEl = document.getElementById("btnCheck");

btnCheckEl.addEventListener("click", function () {
  console.log(this);
});

passwordEl.addEventListener("keyup", () => {
  let password = passwordEl.value;
  password.length > 3
    ? (btnCheckEl.style.display = "block")
    : (btnCheckEl.innerText = "wrong");
});
