function countCHars(arr){
  const obj = {};

  for(let i=0; i<arr.length; i++){
    const char = arr[i];
    if(char in obj){
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj
}

console.log(countCHars([1,2,1,2,2,2,2,2,3,3,4,4,7]))