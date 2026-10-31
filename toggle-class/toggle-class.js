const content = document.createElement("div")
content.id = "content"
const p = document.createElement("p")
p.textContent = "code"
content.append(p)

const control = document.createElement("div")
control.className = "controls"

//helper to create button
function createButton(id, label, onClick) {
  const button = document.createElement("button")
  button.id = id
  button.textContent = label
  button.addEventListener("click", onClick)
  control.append(button)
}

createButton("bold", "B", () => {
  document.querySelector("p").classList.toggle("bold")
})

createButton("italic", "I", () => {
  document.querySelector("p").classList.toggle("italic")
})

createButton("underline", "U", () => {
  document.querySelector("p").classList.toggle("underline")
})

createButton("highlight", "Highlight", () => {
  document.querySelector("div").classList.toggle("highlight")
})

document.body.append(content, control)
