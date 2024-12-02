const board = document.getElementById("board");

// Initialize the board
function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add((row + col) % 2 === 0 ? "light" : "dark");
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            // Add pieces
            if (row < 3 && (row + col) % 2 !== 0) {
                const piece = document.createElement("div");
                piece.classList.add("piece", "red");
                cell.appendChild(piece);
            } else if (row > 4 && (row + col) % 2 !== 0) {
                const piece = document.createElement("div");
                piece.classList.add("piece", "black");
                cell.appendChild(piece);
            }

            board.appendChild(cell);
        }
    }
}

createBoard();

// Add turn-based logic (basic example)
let currentPlayer = "red";
const endTurnButton = document.getElementById("endTurn");

endTurnButton.addEventListener("click", () => {
    currentPlayer = currentPlayer === "red" ? "black" : "red";
    Telegram.WebApp.showPopup({
        title: "Turn Ended",
        message: `It is now ${currentPlayer}'s turn.`,
    });
});
