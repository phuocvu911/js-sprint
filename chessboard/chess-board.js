const body = document.body

function initializeChessboard() {
  const chessboard = document.createElement("div")
  chessboard.className = "chessboard"

  let lastClickedSquare
  let lastColor

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
        //revert previously clicked square to its original color
        if (lastClickedSquare && lastClickedSquare.style.backgroundColor != lastColor) {
          lastClickedSquare.style.backgroundColor = lastColor
        }

        //change current square to red
        lastColor = square.style.backgroundColor
        square.style.backgroundColor = "red"
        lastClickedSquare = square
      })

      //add square div into chessboard div
      chessboard.append(square)
    }
  }

  //add chessboard div into body
  body.append(chessboard)
}

initializeChessboard()
