function filterOutOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0)
}

function filterObjectsByNameLength(arr, len) {
  return arr.filter((o) => o.name.length <= len)
}

function compoundFilter(arr) {
  return arr.filter(
    (o) =>
      o.code.length > 5 &&
      !o.category.includes("special") &&
      o.price > 50 &&
      o.location != "Underground",
  )
}
