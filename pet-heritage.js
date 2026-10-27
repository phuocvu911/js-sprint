// Declaration
class Pet {
  constructor(name, age, species) {
    this.name = name
    this.age = age
    this.species = species
  }

  //method
  makeSound() {
    console.log(`I am a ${this.species}`)
  }
}

class Dog extends Pet {
  constructor(name, age, breed, favoriteToy) {
    super()
    this.name = name
    this.age = age
    this.species = "Dog"
    this.breed = breed
    this.favoriteToy = favoriteToy
  }

  //method
  fetch() {
    console.log(`${this.name} is fetching its ${this.favoriteToy}`)
  }
}

class Cat extends Pet {
  constructor(name, age, color, favoriteNapSpot) {
    super()
    this.name = name
    this.age = age
    this.species = "Cat"
    this.color = color
    this.favoriteNapSpot = favoriteNapSpot
  }

  //method
  purr() {
    console.log(`${this.name} purrs on the ${this.favoriteNapSpot}`)
  }
}
