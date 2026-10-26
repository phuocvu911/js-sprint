function getTotalFromShoppingBasket(arr) {
  return arr.reduce((a, c) => a + c.price, 0)
}

function getAverageAge(people) {
  if (people.length === 0) {
    return 0
  }
  const totalAge = people.reduce((a, c) => a + c.age, 0)
  return totalAge / people.length
}

function concatenateObjects(arr) {
  return arr.reduce((result, { key, value }) => {
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(value)
    return result
  }, {})
}
