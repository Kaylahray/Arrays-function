// QUESTION ONE:
/** 
 * Mutating array methods change or mutate the array that the method was called on.
 * Examples are:
 * (1). pop();
 * (2). push();
 * (3). shift();
 * (4). sort();
 * (5). unshift();
 * 
 * The Non Mutating array methods do not mutate the existing array that the method was called on but instead return a new array.
 * Examples are:
 * (1). concat();
 * (2). filter();
 * (3). map();
 * (4). flat();
 * (5). slice();

**/

// QUESTION TWO
let programmingLanguages = ["C#", "JavaScript", "Ruby", "PHp", "Python"];
console.log(programmingLanguages);
// To add kotlin to the end:
programmingLanguages.push("Kotlin");
console.log(programmingLanguages);

// Add Java after ruby.
programmingLanguages.splice(3, 0, "Java");
console.log(programmingLanguages);

// remove the first item.
programmingLanguages.shift();
console.log(programmingLanguages);

// Add scala and swift to the beginning of the array.
programmingLanguages.unshift("Scala", "Swift");
console.log(programmingLanguages);

// Replace "PHP" with "Go" and "Rust".
programmingLanguages.splice(5, 1, "Go", "Rust");
console.log(programmingLanguages);

// QUESTION THREE:
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
let newFruit = changeFruit(fruit);
console.log(newFruit);
// After calling the function, the new value of fruit will be ['apple', 'mango', 'orange'].

// QUESTION FOUR:
let numbers = [1, 5, 9, 45, 12, 6, 55];
let maximumNumber = function (numbers) {
  return Math.max(...numbers);
};
console.log(maximumNumber(numbers));

// QUESTION FIVE:
let num = [1, 5, 9, 4, 2, 6, 11];

function valTimesIndex(num, index) {
  return num * index;
}
let newMultipliedValue = num.map(valTimesIndex);
console.log(newMultipliedValue);
