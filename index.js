const gameChoices = ["rock", "paper", "scissors"];

const Options = {
    None: "PLEASE SELECT AN OPTION",
    PlayerOne: "YOU WIN!",
    PlayerTwo: "COMPUTER WINS!",
    Equality: "DRAW!",
}

const Choices = {
    None: "none",
    Choice1: "Computer's choice: rock",
    Choice2: "Computer's choice: paper",
    Choice3: "Computer's choice: scissors"
}

function choice() {
    let x = Math.floor(Math.random() * 3);
    return x;
}

function resultDraw() {
    document.querySelector("header p").innerText = Options.Equality;
    document.querySelector("header p").style.setProperty("color", "#FFE15D");
}

function resultComputer() {
    document.querySelector("header p").innerText = Options.PlayerTwo;
    document.querySelector("header p").style.setProperty("color", "#FF1700");
}

function resultPlayer() {
    document.querySelector("header p").innerText = Options.PlayerOne;
    document.querySelector("header p").style.setProperty("color", "#16FF00");
}

let scorePlayer = 0;
let scoreComputer = 0;

function incrementPlayerScore() {
    scorePlayer++;
    document.getElementById("playerScore").innerText = scorePlayer;
}

function incrementComputerScore() {
    scoreComputer++;
    document.getElementById("computerScore").innerText = scoreComputer;
}

function rules(x, y) {

    if (x === 0) {
        document.querySelector("header p").innerText = Options.None;
        document.querySelector("header p").style.setProperty("color", "#7D0633");
    }

    if (x === 1 && y === "rock") {
        resultDraw();

        document.querySelector(".playerSide img").setAttribute("src", "images/rock.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/rock.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice1;
    }

    if (x === 2 && y === "paper") {
        resultDraw();

        document.querySelector(".playerSide img").setAttribute("src", "images/paper.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/paper.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice2;
    }

    if (x === 3 && y === "scissors") {
        resultDraw();

        document.querySelector(".playerSide img").setAttribute("src", "images/scissors.png");

        document.querySelector(".computerSide img").setAttribute("src", "images/scissors.png");
        document.getElementById("computerChoice").innerText = Choices.Choice3;
    }

    if (x === 1 && y === "paper") {
        resultComputer();

        document.querySelector(".playerSide img").setAttribute("src", "images/rock.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/paper.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice2;

        incrementComputerScore();
    }

    if (x === 1 && y === "scissors") {
        resultPlayer();

        document.querySelector(".playerSide img").setAttribute("src", "images/rock.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/scissors.png");
        document.getElementById("computerChoice").innerText = Choices.Choice3;

        incrementPlayerScore();
    }

    if (x === 2 && y === "rock") {
        resultPlayer();

        document.querySelector(".playerSide img").setAttribute("src", "images/paper.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/rock.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice1;

        incrementPlayerScore();
    }

    if (x === 2 && y === "scissors") {
        resultComputer();

        document.querySelector(".playerSide img").setAttribute("src", "images/paper.jpg");

        document.querySelector(".computerSide img").setAttribute("src", "images/scissors.png");
        document.getElementById("computerChoice").innerText = Choices.Choice3;

        incrementComputerScore();
    }

    if (x === 3 && y === "rock") {
        resultComputer();

        document.querySelector(".playerSide img").setAttribute("src", "images/scissors.png");

        document.querySelector(".computerSide img").setAttribute("src", "images/rock.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice1;

        incrementComputerScore();
    }

    if (x === 3 && y === "paper") {
        resultPlayer();

        document.querySelector(".playerSide img").setAttribute("src", "images/scissors.png");

        document.querySelector(".computerSide img").setAttribute("src", "images/paper.jpg");
        document.getElementById("computerChoice").innerText = Choices.Choice2;

        incrementPlayerScore();
    }
}

function play() {

    let variabile = document.getElementById("selector");
    let player = variabile.selectedIndex;

    let computer = gameChoices[choice()];

    rules(player, computer);
}

const trigger = document.querySelector("button");
trigger.addEventListener("click", play, false);

