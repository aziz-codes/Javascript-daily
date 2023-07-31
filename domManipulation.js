const passwordEl = document.getElementById("password");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  passwordEl.type = passwordEl.type === "password" ? "text" : "password";
});
// test commit