'use strict';

//Recursion

//1 Sheep Count
function sheepCount(sheep) {
	if (sheep === 0) return;
    
	console.log(`${sheep} sheep`);
	console.log('Another sheep jumps over the fence.');

	sheepCount(sheep - 1);
}

// sheepCount(5);

//2

function doubleArray(arr) {
	if (arr.length === 0) return [];
	return [arr[0] * 2, ...doubleArray(arr.slice(1))];
}

console.log(doubleArray([1, 2, 3, 4, 5]));
// doubleArray([5, 6, 7, 8, 9]);
//output: [2, 4, 6, 8, 10]


//3



//4



//5



//6



//7



//8



//9



//10



//11



//Iteration

//1



//2



//3



//4



//5



//6



//7



//8



//9



//10



//11
