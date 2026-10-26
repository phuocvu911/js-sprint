function convert2DArrayToObjectArray(arr) {
  return arr.map((a) => ({ [a[0]]: a[1] }))
}

function convertArrayOfObjectsToStrings(arr) {
  return arr.map((o) =>
    Object.entries(o).map(
      ([key, val]) => `${key[0].toUpperCase()}${key.slice(1)}: ${val}`,
    ).join(', '),
  )
}

const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
]

console.log(convertArrayOfObjectsToStrings(objects))

function concatenateStrings(arr, num) {
  return arr.map((str) => (str.length > num ? str.slice(0, num) + "..." : str))
}
