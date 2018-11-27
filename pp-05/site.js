//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  num = num * 2;
  return num;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):

(function(){
  let x = 5;
  function double(num){
    num = num * 2;
    return num;
  }
})();


//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(i) // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
//This function does not modify the global variable x since this method uses
//the local x created when the argument is passed to the methods parameters.
//This local x is only avaible withing the scope of the method and not outside.
