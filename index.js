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
// let playerOne = "rock";
// let computer = "paper";

// if (playerOne === computer) {
//   //tie game
// } else if (playerOne === "rock") {
//   if (computer === "paper") {
//     //computer win
//   } else {
//     // playerOne wins
//   }
// } else if (playerOne === "paper") {
//   if (computer === "scissors") {
//     //computer win
//   } else {
//     // playerOne wins
//   }
// } else {
//   if (computer === "rock") {
//     // computer wins
//   } else {
//     // player wins
//   }
// }

// SWITCH STATEMENT
// switch (Math.floor(Math.random() * 5 + 1)) {
//   case 1:
//     console.log(1);
//     break;

//   case 2:
//     console.log(2);
//     break;

//   case 3:
//     console.log(3);
//     break;

//   default:
//     console.log("No match");
// }

// let playerOne = "scissors";
// let computer = "paper";

// switch (playerOne) {
//   case computer:
//     console.log("Tie game!");
//     break;
//   case "rock":
//     if (computer === "paper") {
//       console.log("computer wins!");
//     } else {
//       console.log("playerOne wins!");
//     }
//     break;
//   case "paper":
//     if (computer === "scissors") {
//       console.log("computer wins");
//     } else {
//       console.log("playerOne wins!");
//     }
//     break;
//   default:
//     if (computer === "rock") {
//       console.log("computer wins");
//     } else {
//       console.log("playerOne wins!");
//     }
// }

//TERNARY OPERATOR

// let soup = "Chicken ramen";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? "Sorry, no soup for you!"
//   : soup
//   ? `Yes we have ${soup} today.`
//   : "Sorry, no soup today.";
// console.log(soupAccess);

// let testScore = 90;
// let myGrade =
//   testScore > 89
//     ? "A"
//     : testScore > 79
//     ? "B"
//     : testScore > 69
//     ? "C"
//     : testScore > 59
//     ? "D"
//     : "F";
// console.log(`My test grade is a ${myGrade}.`);

// let playerOne = "scissors";
// let computer = "paper";

// let result =
//   playerOne === computer
//     ? "Tie game!"
//     : playerOne === "rock" && computer === "paper"
//     ? "Computer wins!"
//     : playerOne === "paper" && computer === "scissors"
//     ? "Computer wins!"
//     : playerOne === "scissors" && computer === "rock"
//     ? "Computer wins!"
//     : "playerOne wins !";
// console.log(result);

//USER INPUT

// let myBoolean = confirm("Ok === True\nCancel === False");

// console.log(myBoolean);

// let name = prompt("Please enter your name.");
// if (name) {
//   console.log(name);
// } else {
//   console.log("You didn't enter your name ");
// }

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  // play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (
      playerOne === "rock" ||
      playerOne == "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
