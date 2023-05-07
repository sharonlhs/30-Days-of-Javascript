/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable 
and assign value to it and use the typeof operator to check different data types.
*/

let firstName = 'Sharon';
let lastName = 'Lhs';
let country = 'Malaysia';
let city = 'Kuala Lumpur';
let age = 23;
let isMarried = false;
let year = 2023;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age,
    typeof age, typeof isMarried, typeof year);

// 2. Check if type of '10' is equal to 10
console.log("10" === 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

// 4. Boolean value is either true or false.
// 4a. Write three JavaScript statement which provide truthy value.
console.log( 2 == '2');
console.log("" == 0);
console.log(undefined == null);

// 4b. Write three JavaScript statement which provide falsy value.
console.log(0 === false);
console.log(0 === "");
console.log(NaN == NaN);

/* 5. Figure out the result of the following comparison expression first without using 
console.log(). After you decide the result confirm it using console.log()'
i. 4 > 3  // true. greater than
ii. 4 >= 3 // true
iii. 4 < 3 // false
iv. 4 <= 3 // false
v. 4 == 4 // true
vi. 4 === 4 // true
vii. 4 != 4 // false
vii. 4 !== 4 // false
ix. 4 != '4' // false
x. 4 == '4' // true
xi. 4 === '4' // false
xii. Find the length of python and jargon and make a falsy comparison statement.
*/
console.log( 4 > 3); // true
console.log( 4 >= 3); //true
console.log( 4 < 3); //false
console.log( 4 <= 3); //false
console.log(4 == 4); // true
console.log( 4 === 4); //true
console.log( 4 != 4); //false
console.log( 4 !== 4); //false
console.log( 4 != '4'); //false
console.log( 4 == '4'); //true
console.log(4 === '4'); //false
console.log('python'.length != 'jargon'.length); //false

/* 6. Figure out the result of the following expressions first without using 
console.log(). After you decide the result confirm it by using console.log()
i. 4 > 3 && 10 < 12 //true
ii. 4 > 3 && 10 > 12 //false
iii. 4 > 3 || 10 < 12 //true
iv. 4 > 3 || 10 > 12 //true
v. !(4 > 3) //false
vi. !(4 < 3) //true
vii. !(false) //true
viii. !(4 > 3 && 10 < 12) //false
ix. !(4 > 3 && 10 > 12) // true
x. !(4 === '4') // true
xi. There is no 'on' in both dragon and python
*/
console.log('q6');
console.log(4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'));
const check = 'dragon' && ' python';
console.log(!check.includes('on'));

/* 7. Use the Date object to do the following activities
i. What is the year today?
ii. What is the month today as a number?
iii. What is the date today?
iv. What is the day today as a number?
v. What is the hours now?
vi. What is the minutes now?
vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime()); // This is the number of seconds passed from January 1, 1970 to now
