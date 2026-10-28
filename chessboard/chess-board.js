function initializeChessboard() {
  const board = document.createElement("div")
  board.className = "chessboard"

  let selected = null

  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const square = document.createElement("div")
      square.className = "square " + ((row + col) % 2 === 0 ? "white" : "black")
      square.id = "square-" + row + "-" + col
      board.appendChild(square)
    }
  }

  board.addEventListener("click", (event) => {
    const square = event.target.closest(".square")
    if (!square) return

    if (selected) {
      selected.style.backgroundColor = ""
    }
    square.style.backgroundColor = "red"
    selected = square
  })

  document.body.appendChild(board)
}

initializeChessboard()
