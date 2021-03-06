//default colour and click setting

let colour = "black";
let click = false; //if set to true the function will not work when page loads only after first click.

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
    square.style.backgroundColor = "transparent";             //color of squares before being turned to black or colour
    board_div.insertAdjacentElement("beforeend", square);
    }
}

populateBoard();

//allows a max and min amount of squares on the grid

function changeSize(input) {
    if(input >= 1 && input <= 100) {
        populateBoard(input);
    } else {
        false; //prevents possible crash event
    }
}

//creates a random colour selection for the user

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
    squares.forEach((div) => (div.style.backgroundColor = "transparent"));
}

//adds a click element to the board so the user can't start colouring until they click on the board

document.querySelector(".board").addEventListener("click", () => {
    click = !click;
});