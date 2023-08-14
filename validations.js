// file for validation
const textEl = document.getElementById("textEl");
document.body.style.padding = "10px";
let name = "";
textEl.addEventListener("change", (e) => {
  name = textEl.value;
});
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", () => {
  validateTetx(name);
});
// test commit

// Asif Chapali
//  03434337418

const validateTetx = (text) => {
  let specs = "0,1,2,3,4,5,6,7,8,9,@,!,/,-,+,_,#,$,%,^,^,&,*,(,)";
  let newText = specs.replaceAll(",", "").split("");
  // console.log(name.split(",").some((i) => i === i.toUpperCase()));
  let upperCaseRegex = "(/[A-Z]/g)";
  console.log(text.match(upperCaseRegex));
};
