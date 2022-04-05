function populateBoard(size) {
    let board_div = document.querySelector(".board");
board_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;   //Allows the the grids and columns to be created

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board_div.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);