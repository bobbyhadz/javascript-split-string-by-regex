// EXAMPLE 1 - Split a String by a Regex in JavaScript

const str = 'one,two.three four';

const result = str.split(/[,.\s]/);

// 👇️ ['one', 'two', 'three', 'four']
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Examples of splitting strings by a regex

// const str = 'bobby1hadz2com';

// const result = str.split(/\d/);
// console.log(result); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Performing a case-insensitive match and split

// const str = 'oneAtwoBthree';

// const result = str.split(/[ab]/i);
// console.log(result); // 👉️ ['one', 'two', 'three']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Removing empty strings from the result

// const str = 'one,,two..three four.';

// const result = str.split(/[,.\s]/);

// // 👇️ [ 'one', '', 'two', '', 'three', 'four', '' ]
// console.log(result);
