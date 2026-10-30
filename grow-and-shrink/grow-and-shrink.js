const alphabet = "abcdefghijklmnopqrstuvwxyz"
const letterContainer = document.createElement("div")
const buttonContainer = document.createElement("div")
const letters = [] //array of all letter div elem
const fontSizes = Array(alphabet.length).fill(14) //default size is 14, tracking of those 26 characters
let selectedIndex = 0

letterContainer.className = "letter-container"
buttonContainer.className = "button-container"

//helper to remember which one is selected now
function selectLetter(index) {
  letters[selectedIndex].classList.remove("selected")
  selectedIndex = index
  letters[selectedIndex].classList.add("selected")
}

for (const [index, character] of [...alphabet].entries()) {
  const letter = document.createElement("div")
  letter.className = "letter"
  letter.id = character
  letter.textContent = character.toUpperCase()
  letter.addEventListener("click", () => selectLetter(index))
  letters.push(letter)
  letterContainer.append(letter)
}

//select a bu dafault
letters[selectedIndex].classList.add("selected")

//helper to create button
function createButton(id, label, onClick) {
  const button = document.createElement("button")
  button.id = id
  button.textContent = label
  button.addEventListener("click", onClick)
  buttonContainer.append(button)
}

createButton("prev", "<", () => {
  selectLetter((selectedIndex - 1 + alphabet.length) % alphabet.length)
})
createButton("next", ">", () => {
  selectLetter((selectedIndex + 1) % alphabet.length)
})
createButton("decrease", "-", () => {
  const newSize = fontSizes[selectedIndex] - 2
  if (newSize < 10) return
  fontSizes[selectedIndex] = newSize
  letters[selectedIndex].style.fontSize = `${newSize}px`
})
createButton("increase", "+", () => {
  const newSize = fontSizes[selectedIndex] + 2
  if (newSize > 26) return
  fontSizes[selectedIndex] = newSize
  letters[selectedIndex].style.fontSize = `${newSize}px`
})

document.body.append(letterContainer, buttonContainer)
