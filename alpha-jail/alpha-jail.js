const outside = document.createElement("div")
outside.className = "zone outside"

const inside = document.createElement("div")
inside.className = "zone inside"

document.body.append(outside, inside)

const characters = []
let currentCharacter = null
let pointerX = window.innerWidth / 2
let pointerY = window.innerHeight / 2

function placeAt(character, x, y) {
  character.style.left = `${x}px`
  character.style.top = `${y}px`
}

function isInJail(x, y, rect) {
  return x >= rect.left && x < rect.right && y >= rect.top && y < rect.bottom
}

function trap(character) {
  character.classList.add("trapped")
}

document.addEventListener("pointermove", (event) => {
  pointerX = event.clientX
  pointerY = event.clientY

  if (!currentCharacter) return

  const rect = inside.getBoundingClientRect()

  if (currentCharacter.classList.contains("trapped")) {
    if (!isInJail(pointerX, pointerY, rect)) {
      const halfWidth = currentCharacter.offsetWidth / 2
      const halfHeight = currentCharacter.offsetHeight / 2
      const x = Math.max(
        rect.left + halfWidth,
        Math.min(pointerX, rect.right - halfWidth),
      )
      const y = Math.max(
        rect.top + halfHeight,
        Math.min(pointerY, rect.bottom - halfHeight),
      )

      placeAt(currentCharacter, x, y)
      currentCharacter.classList.remove("follow")
      currentCharacter = null
    } else {
      placeAt(currentCharacter, pointerX, pointerY)
    }

    return
  }

  placeAt(currentCharacter, pointerX, pointerY)

  if (isInJail(pointerX, pointerY, rect)) {
    trap(currentCharacter)
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    characters.forEach((character) => character.remove())
    characters.length = 0
    currentCharacter = null
    return
  }

  if (!/^[a-z]$/.test(event.key)) return

  if (currentCharacter) {
    currentCharacter.classList.remove("follow")
  }

  const character = document.createElement("div")
  character.className = "character follow"
  character.textContent = event.key
  placeAt(character, pointerX, pointerY)
  document.body.append(character)
  characters.push(character)
  currentCharacter = character

  const rect = inside.getBoundingClientRect()
  if (isInJail(pointerX, pointerY, rect)) {
    trap(character)
  }
})
