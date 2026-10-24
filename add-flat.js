function sumNestedArray(arr) {
  arr = arr.flat(Infinity)
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      res += arr[i]
    }
  }
  return res
}

