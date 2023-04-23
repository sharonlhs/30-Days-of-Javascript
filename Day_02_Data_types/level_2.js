// 1. Print to console
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print to console
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = '10'
let numInt = parseInt(num)
console.log(numInt)

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = '9.8'
let stringToFloat = parseFloat(float)
console.log(stringToFloat)

// 5. Check if 'on' is found in both python and jargon
let firstWord = 'python'
let secondWord = 'jargon'
console.log(firstWord.includes('on'))
console.log(secondWord.includes('on'))

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let firstString = 'I hope this course is not full of jargon'
console.log(firstString.includes('jargon'))

// 7. Generate a random number between 0 and 100 inclusively.
const q7 = Math.floor(Math.random() * 101)
console.log(q7)

// 8. Generate a random number between 50 and 100 inclusively.
const q8 = Math.floor(Math.random() * 51) + 50
console.log(q8)

// 9. Generate a random number between 0 and 255 inclusively.
const q9 = Math.floor(Math.random() * 256)
console.log(q9)

// 10. Access the 'JavaScript' string characters using a random number.
let q10 = 'JavaScript'
console.log(q10.charAt(Math.floor(Math.random() * q10.length)))

// 11. Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// 12. Use substr to slice out the phrase because because because
let q12 = 'You cannot end a sentence with because because because is a conjunction'
console.log(q12.substr(31, 23))