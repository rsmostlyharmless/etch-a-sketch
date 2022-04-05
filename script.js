//set up the mouse to change the colour of the squares

let colour = "black";
let click = true;

//creates a veriety of squares dependant on amount entered and assignes them to rows and columns on the grid

function populateBoard(size) {
    let board_div = document.querySelector(".board");
    let squares = board_div.querySelectorAll("div");
    squares.forEach((div) => div.remove());
board_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colourSquare);
    square.style.backgroundColor = "white";             //color of squares before being turned to black or colour
    board_div.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

//allows a max and min amount of squares on the grid

function changeSize(input) {
    if(input >= 10 || input <= 500) {
        populateBoard(input);
    } else {
        console.log("wrong selection");
    }
}

//creates a random colour selction for the user

function colourSquare() {
    if (click) {
        if (colour === "multiple") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = colour;
        }
    }
}

function changeColour(choice) {
    colour = choice;
}

//resets the board

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}

