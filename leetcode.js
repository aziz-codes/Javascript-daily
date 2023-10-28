const array = [1, 2, 1, 2, 2, 1, 3, 4, 5];

const obj = {};

for (let i = 0; i < array.length; i++) {
  if (array[i] in obj) {
    obj[array[i]]++;
  } else {
    obj[array[i]] = 1;
  }
}
console.log(obj);

console.log(TwoMaxNums(obj));

function TwoMaxNums(obj) {
  let max = 0;
  let max2 = 0;
  for (let i in obj) {
    if (obj[i] > max) {
      max = i;
    }
    if (obj[i] > max2 && obj[i] < max) {
      max2 = obj[i];
    }
  }
  return {
    "first most": max,
    "second most": max2,
  };
}
