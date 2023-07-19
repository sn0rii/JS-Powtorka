// let name = "Wojtek";
// console.log(name.charAt(Math.floor(Math.random() * name.length)));

// // IF STATEMENTS

// let testScore = 59;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else {
//   if (collegeStudent) {
//     grade = "U";
//   } else {
//     grade = "F";
//   }
// }

// console.log(grade);

// ROCK AND PAPER
let playerOne = "rock";
let computer = "paper";

if (playerOne === computer) {
  //tie game
} else if (playerOne === "rock") {
  if (computer === "paper") {
    //computer win
  } else {
    // playerOne wins
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    //computer win
  } else {
    // playerOne wins
  }
} else {
  if (computer === "rock") {
    // computer wins
  } else {
    // player wins
  }
}
