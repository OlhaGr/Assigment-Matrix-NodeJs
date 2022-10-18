//don't work
 let numbers = array[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filtered = numbers.filter(){
  function evenNumbers(number){
         return number % 2 === 0;
  } 
   };
 console.log(numbers.filtered);


 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const filtered = numbers.filter(function evenNumbers(number) {
    return number % 2 === 0
});
console.log(filtered);

function example (x){
       return x * 2
    }
     example (5);

 console.log(example);
 const a = 1; const b = 2; const c = 3;
 (function firstFunction() {
   const b = 5; const c = 6;

   (function secondFunction() {
      const b = 8;

      (function thirdFunction() {
         const a = 7; const c = 9;

         (function fourthFunction(){
            const a = 1; const c = 8;
         })()
      })()
   })()
 })()
 console.log('a: ${a}, b: ${b}, c:${c}');
 console.log("a: 'fourthFunction', b: 'secondFunction', c: 'firstFunction'");