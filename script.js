// answer for question 1
function original(string) {
   let string2 = string.split('');
   let string3 = new Set(string2);
   let string4 = [...string3].join('');
   let answer1 = document.getElementById('answer1');
   answer1.innerText = string4;
   console.log(string4);
}
original("abcadeecfb");



// answer for question 2
function original1(string) {
   let array2 = new Map();
   let num = 1;
   for(let count of string) {
      if(array2.has(count)) {
         array2.set(count, array2.get(count) + num);
      }
      else {
         array2.set(count, num);
      }
   }
   for(let [value, number] of array2) {
      console.log(value + " = " + number);
   }
}
original1("abcadeecfb")