const findSum = function(array) {
  let sum = 0; 
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      sum += num;
    } 
    return sum;
};

const findFrequency = function(array) {
    let frequencyObj = {
      most: ' ',
      least: ' ',
    };
      frequencyObj.most = array.sort((firstEl, secondEl) =>
          array.filter(value => value === firstEl).length 
        - array.filter(value => value === secondEl).length
      ).pop(); 
    frequencyObj.least = array.sort((firstEl, secondEl) =>
          array.filter(value => value === secondEl).length 
        - array.filter(value => value === firstEl).length
      ).pop(); 
    
    return frequencyObj; 
};


const isPalindrome = function(str) {
  str = str.toLowerCase();
  for(let i = 0; i < (str.length) / 2; i ++){ 
    if(str[i] !== str[str.length - i - 1]){ 
      return false;
    } 
  }
  return true;
};

const largestPair = function(array) {
   let x = 0;
   let y = 0;
   let z = Number.MIN_SAFE_INTEGER;
   for (let i = 0; i < array.length; i++) {
      x = array[i];
      y = array[i + 1];
      if (x * y > z) {
         z = x * y;
      };
   };
   return z;
};

const removeParenth = function(str) {
  return str.replace(/ *\([^)]*\) */g, ''); 
};

const scoreScrabble = function(str) {
  const score = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10,
  }; 
  return str.toLowerCase().split('').map(letter => score[letter])
  .reduce((preVal, curVal) => preVal + curVal); 
};  
