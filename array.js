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

const array = [2, 3, 4, 5];
console.log(array.reduce((acc, el) => acc + el));
