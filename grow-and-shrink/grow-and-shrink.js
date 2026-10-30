function initAlphabet() {
  //letter container
  const letterCon = document.createElement("div")
  letterCon.className = "letter-container"

  for (const c of "abcdefghijklmnopqrstuvwxyz") {
    const letter = document.createElement("div")
    letter.className = "letter " + (c === "a" ? "selected" : "")
    letter.id = c
    letter.textContent = c.toUpperCase()
    letterCon.append(letter)
  }

  //   letterCon.addEventListener()
  document.body.append(letterCon)
  //button container
}

initAlphabet()
