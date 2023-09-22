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

// returning max num using reduce
const arr = [2, 3, 4, , 10, 6];
// let num = 0;
let max = arr.reduce((acc, el) => {
  return el > acc ? el : acc;
});
console.log(max);
