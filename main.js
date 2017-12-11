'use strict';

//https://gist.github.com/tparveen/edddf988ec68ef6bb74cff9d1284d09d


//Recursion

//1 Sheep Count
function sheepCount(sheep) {
	if (sheep === 0) return;

	console.log(`${sheep} sheep`);
	console.log('Another sheep jumps over the fence.');

	sheepCount(sheep - 1);
}

// sheepCount(5);

//2 Double Array

function doubleArray(arr) {
	if (arr.length === 0) return [];
	return [arr[0] * 2, ...doubleArray(arr.slice(1))];
}

// console.log(doubleArray([1, 2, 3, 4, 5]));
// doubleArray([5, 6, 7, 8, 9]);
//output: [2, 4, 6, 8, 10]


//3 Reverse String
function reverseString(string) {
  if (string === '') {
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));

}

// console.log(reverseString('Hello'));

//4 nth Triangular Number
function triangular(n) {
if (n === 0) {
  return 0;
}

return n + triangular(n - 1);
//return 3 + triangular(2)
//triangular(1)
//triangular(0)
//satisfies base case and returns 0
}

console.log(triangular(3));


/*

                          *               *
            *           *    *          *   *
*     |   *   *  |   *    *    *  |   *   *   *
                                    *   *   *   *

1st       2nd          3rd             nth?

*/

//5 String Splitter



//6 Binary Representation



//7 Anagrams



//8 Animal Hierarchy



//9 Factorial



//10 Fibonacci



//11 Organization Chart



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Iteration

//1 Sheep Count



//2 Double Array



//3 Reverse String



//4 nth Triangular Number



//5 String Splitter



//6 Binary Representation



//7 Anagrams



//8 Animal Hierarchy



//9 Factorial



//10 Fibonacci



//11 Organization Chart
