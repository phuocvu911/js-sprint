function convert2DArrayToObjectArray(arr) {
  return arr.map((a) => ({ [a[0]]: a[1] }))
}

function convertArrayOfObjectsToStrings(arr) {
  return arr.map(
    (a) => `Name: ${a.name}, Age: ${a.age}, City: ${a.city}`,
  )
}

function concatenateStrings(arr, num) {
  return arr.map((str) => (str.length > num ? str.slice(0, num) + "..." : str))
}
