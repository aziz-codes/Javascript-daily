const uniqueKeys = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  // let maxObj = {};
  // let max = 0;
  // for (let i in obj) {
  //   if (obj[i] > max) {
  //     max = obj[i];
  //     maxObj[i] = max;
  //   }
  // }
  // return maxObj;
  return obj;
};
const array = ["apple", "pear", "apple", "mango", "apple", "pear"];
console.log(uniqueKeys(array));

let obj = { apple: 2 };
if (array[0] in obj) {
  console.log("found");
} else {
  console.log("item not found");
}
