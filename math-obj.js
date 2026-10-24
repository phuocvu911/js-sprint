const mathObj = {
  abs(a) {
    return Math.abs(a)
  },
  isEven(a) {
    return a % 2 === 0
  },
  isOdd(a) {
    return !this.isEven(a)
  },
  isStrictlyPositive(a) {
    return a > 0
  },
  min(a, b) {
    if (a <= b) {
      return a
    } else {
      return b
    }
  },
  max(a, b) {
    if (a > b) {
      return a
    } else {
      return b
    }
  },
}
