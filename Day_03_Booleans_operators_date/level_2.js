/* 1. Write a script that prompt the user to enter base and height 
of the triangle and calculate an area of a triangle 
(area = 0.5 x b x h).
*/
function TriangleArea() {
    let base = prompt("Enter base: ");
    let height = prompt("Enter height: ");
    let area = 0.5 * base * height;
    alert(`The area of the triangle is ${area}`);
}

// 2. Calculate perimeter of triangle
function TrianglePerimeter() {
    let sideA =  prompt("Enter side a: ");
    let sideB = prompt("Enter side b: ");
    let sideC = prompt("Enter side c: ");
    let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
    alert(`The perimeter of the triangle is ${perimeter}`);
}

// 3. Calculate area and perimeter of rectangle
function RectangleAreaAndPerimeter() {
    let length = prompt("Enter length: ");
    let width = prompt("Enter width: ");
    let area = length * width;
    let perimeter = parseInt(length) + parseInt(width);
    alert(`The area of the rectangle is ${area} and the perimeter of the rectangle is ${perimeter}`);
}

// 4. Calculate area and circumference of a circle where pi = 3.14
function CircleAreaAndCircum() {
    let pi = 3.14;
    let radius = prompt("Enter radius: ");
    let areaCircle = pi * radius * radius;
    let circumference = 2 * pi * radius;
    alert(`The area of the circle is ${areaCircle} and the circumference of the circle is ${circumference}`);
}

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 (y=mx+c)
function CalculateSlope() {
    const m = parseFloat(prompt("Enter the slope: "));
    const b = parseFloat(prompt("Enter the y-intercept: "));

    //Calculate x-intercept
    const xIntercept = -b / m;
    alert(`The slope is ${m}, y-intercept is ${b}, and x-intercept is ${xIntercept}`);
}

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
function FindSlope() {
    //get slope
    const y2 = parseInt(prompt("Enter y2: "));
    const y1 = parseInt(prompt("Enter y1: "));
    const x2 = parseInt(prompt("Enter x2: "));
    const x1 = parseInt(prompt("Enter x1: "));

    //calculate slope
    const slope = (y2-y1)/(x2-x1);
    alert(`The slope between (${y2} - ${y1})/(${x2} - ${x1}) is ${slope}`);
}

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function GetSlope() {
    const y = 0;
    const a = 1;
    const b = 6;
    const c = 9;

    const discriminant = b**2 - 4*a*c;
    const x = (-b + Math.sqrt(discriminant)) / (2*a);
    alert(`When y is 0, x is ${x}`);
}

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
function getPay() {
    const hours = parseInt(prompt("Enter hours: "));
    const rate = parseInt(prompt("Enter rate per hour: "));
    const pay = hours * rate;
    alert(`Your weekly earning is ${pay}`);
}

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
function calculateNameLength() {
    const yourName = prompt("Enter your name: ");
    if(yourName.length >= 7) {
        alert(`Your name is too long`);
    } else {
        alert(`Your name is short`);
    }
}

// 11. Compare your first name length and your family name length and you should get this output.
function whichLengthLonger() {
    let firstName = prompt("Enter first name: ");
    let lastName = prompt("Enter last name: ");

    if(firstName.length > lastName.length) {
        alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
    } else {
        alert(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);
    }
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
function Age() {
    let myAge = 250;
    let yourAge = 25;
    let ageGap = myAge - yourAge;
    alert(`I am ${ageGap} years older than you`);
}

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
function drivingAge() {
    let birthYear = parseInt(prompt("Enter birth year: "));
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    if(age >= 18) {
        alert(`You are ${age}. You are old enough to drive`);
    } else {
        let gap = 18 - age;
        alert(`You are ${age}. You will be allowed to drive after ${gap} years`);
    }

}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
function liveUpTo() {
    const years = parseInt(prompt("Enter number of years you live: "));
    //Calculate the number of seconds in 100 years
    const secondsPerYear = 365 * 24 * 60 * 60;
    const seconds = years * secondsPerYear;
    alert(`You lived ${seconds} seconds`)
}

/* 15. Create a human readable time format using the Date time object
i. YYYY-MM-DD HH:mm
ii. DD-MM-YYYY HH:mm
iii. DD/MM/YYYY HH:mm
*/
let date = new Date();
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);