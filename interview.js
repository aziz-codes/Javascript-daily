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


function sameFrequency(arr1,arr2){
  // check if one array contains each value squared in the other array, 
  if(arr1.length!==arr2.length) return;

  for(let i=0;i<arr1.length;i++){
    if(arr2[i] !== Math.pow(arr1[i],2)) return false;
   
  }
  return true;
  
}


const arr1=[1,2,3];
const arr2=[1,4,9]

console.log(sameFrequency(arr1,arr2))



function generateCombinations(number) {
  const numStr = number.toString();
  const length = numStr.length;
  const combinations = [];

  // Function to generate combinations recursively
  function generate(current, index) {
    if (current.length > 0) {
      combinations.push(current);
    }
    for (let i = index; i < length; i++) {
      generate(current + numStr[i], i + 1);
    }
  }

  generate("", 0); // Start with an empty string and index 0
  return combinations;
}
const result = generateCombinations(123);
console.log(result);
