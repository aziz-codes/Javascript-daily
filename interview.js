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

// console.log(countCHars([1,2,1,2,2,2,2,2,3,3,4,4,7]))


function isPalindrome(str) {
    //using array notation
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('recer'));

function isPalindrome2(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; //return false on first mismatch
        }
    }
    return true; // Return true if no mismatches are found
}

console.log(isPalindrome2('deda'));


// return max value from nested array
function maxValue (arr){
    return arr.flat(Infinity).reduce((acc,el)=>{
      return Math.max(acc,el) 
    },0)
}

console.log(maxValue([2, 3, 4,[36,7,8,[9,5,0]]]));;


function largeWord(sentance){
  return sentance.split(" ").reduce((acc,el)=>{
     if(acc.length>el.length){
       return acc
     }
     else return el;
  },"")
}

console.log(largeWord("Hello JavaScript"));