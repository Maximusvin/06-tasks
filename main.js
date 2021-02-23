// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

const students = [
  { name: "John", grade: 80 },
  { name: "Bill", grade: 77 },
  { name: "David", grade: 68 },
  { name: "Ryan", grade: 88 },
  { name: "Nick", grade: 95 },
];

let totalGrade = 0;

for (let i = 0; i < students.length; i++) {
  totalGrade += students[i].grade;
}

const averageGrade = totalGrade / students.length;

console.log(`Grade point average: ${averageGrade}`);

const F = averageGrade < 60;
const D = averageGrade < 70;
const C = averageGrade < 80;
const B = averageGrade < 90;
const A = averageGrade < 100;

switch (true) {
  case F:
    console.log("Average rating: 'F'");
    break;
  case D:
    console.log("Average rating: 'D'");
    break;
  case C:
    console.log("Average rating: 'C'");
    break;
  case B:
    console.log("Average rating: 'B'");
    break;
  case A:
    console.log("Average rating: 'A'");
    break;
  default:
    console.log("You need a new class");
}

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

const maxCount = 1000;
const num1 = 3;
const num2 = 5;

let sum = 0;

for (let i = 1; i <= maxCount; i++) {
  i % num1 === 0 || i % num2 === 0 ? (sum += i) : sum;
}

console.log(sum);

//  3. Write a JavaScript program to construct the following pattern, using a nested for loop.

const countStars = 5;

let stars = "";
for (let i = 1; i <= countStars; i++) {
  stars = stars + "* ";
  console.log(`${stars} \n`);
}
