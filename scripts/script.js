//variables

let userScore = 0;
let compScore = 0;

//comp choice

const getCompChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock👊";
  } else if (randomNumber === 2) {
    return "Paper🖐";
  } else if (randomNumber === 3) {
    return "Scissors✌";
  }
};

//user input

const playGame = function (weapon) {
  const userSelect = weapon;
  const compSelect = getCompChoice();
  const result = getResult(userSelect, compSelect);

  if (result === "You WON") {
    userScore = userScore + 1;
    document.querySelector(".result").style.color = "#20bf55";
  } else if (result === "You LOST") {
    compScore = compScore + 1;
    document.querySelector(".result").style.color = "red";
  } else if (result === "DRAW") {
    document.querySelector(".result").style.color = "orange";
  }

  //Score

  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".comp-score").innerText = compScore;

  //Result

  document.querySelector(".user-choice").innerText = userSelect;
  document.querySelector(".comp-choice").innerText = compSelect;
  document.querySelector(".result").innerText = result;
};

//GAME engine

const getResult = function (userChoice, compChoice) {
  if (userChoice === "Rock👊") {
    if (compChoice === "Rock👊") {
      return "DRAW";
    } else if (compChoice === "Paper🖐") {
      return "You LOST";
    } else if (compChoice === "Scissors✌") {
      return "You WON";
    }
  }

  if (userChoice === "Paper🖐") {
    if (compChoice === "Rock👊") {
      return "You WON";
    } else if (compChoice === "Paper🖐") {
      return "DRAW";
    } else if (compChoice === "Scissors✌") {
      return "You LOST";
    }
  }

  if (userChoice === "Scissors✌") {
    if (compChoice === "Rock👊") {
      return "You LOST";
    } else if (compChoice === "Paper🖐") {
      return "You WON";
    } else if (compChoice === "Scissors✌") {
      return "DRAW";
    }
  }
};

