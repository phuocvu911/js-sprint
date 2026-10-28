const body = document.body

function initializeChessboard() {
  const chessboard = document.createElement("div")
  chessboard.className = "chessboard"

  let lastClickedSquare

  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const square = document.createElement("div")
      square.className = "square"
      square.id = `square-${row}-${col}`

      if ((row + col) % 2 === 0) {
        square.style.backgroundColor = "white"
      } else {
        square.style.backgroundColor = "black"
      }

      // Add click event listener, inside a loop so every square listening independently
      square.addEventListener("click", function () {
        // Revert previously clicked square to its original color
        if (lastClickedSquare) {
          const lastRow = parseInt(lastClickedSquare.id.split("-")[1])
          const lastCol = parseInt(lastClickedSquare.id.split("-")[2])
          if ((lastRow + lastCol) % 2 === 0) {
            lastClickedSquare.style.backgroundColor = "white"
          } else {
            lastClickedSquare.style.backgroundColor = "black"
          }
        }

        // Change current square to red
        square.style.backgroundColor = "red"
        lastClickedSquare = square
      })

      chessboard.append(square)
    }
  }

  body.append(chessboard)
}

initializeChessboard()
