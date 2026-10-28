export class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
  perimeter() {
    return (this.width + this.height) * 2
  }
}

export const rectangle = new Rectangle(5, 3)
