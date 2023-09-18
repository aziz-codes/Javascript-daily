// const minifier = (count) => {
//   if (count <= 999) {
//     return count + " views";
//   } else if (count > 1000 && count <= 999999) {
//     return (count / 1000).toString().slice(0, 3) + "k Views";
//   } else if (count > 999999 && count < 9999999) {
//     return (count / 100000).toString().slice(0, 2) + "M Views";
//   }
// };
// console.log(minifier(1250984));

let Name = "01Aziz";
console.log(Name.slice(2));

const positionEl = document.getElementById("position");
console.log(positionEl.clientLeft);
