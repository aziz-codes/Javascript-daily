// const array = ["apple", "pear", "apple", "bannana", "apple", "pear"];
// let obj = {};
// for (i in array) {
//   if (array[i] === obj) {
//     obj[i] += 1;
//   } else {
//     obj[i] = array[i];
//   }
// }
// console.log(obj);
const products = [
  {
    item: "watch",
    price: 45,
  },
  {
    item: "usb",
    price: 50,
  },
  {
    item: "usb cable",
    price: 32,
  },
];
let sum = products.reduce((acc, el) => {
  return (acc += el.price);
}, 0);
console.log(sum);
