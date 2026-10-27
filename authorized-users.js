function compare(arr, item) {
  for (const x of arr) {
    if (x === item) {
      return true
    }
  }
  return false
}

function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b)
    }
  }
}

let isAuthorizedUser = curry(compare)
