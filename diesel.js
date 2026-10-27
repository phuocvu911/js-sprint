function calculateFines(arr) {
  const cars = JSON.parse(arr)

  const getFine = (year, fuel) => {
    if (year < 2000) {
      return 20
    }
    if (year < 2015 && fuel === "diesel") {
      return 10
    }
    return 0
  }

  const fined = []
  let totalFines = 0

  for (const [make, model, reg, year, fuel] of cars) {
    const fine = getFine(year, fuel)
    if (fine > 0) {
      fined.push({ reg, year, fuel, fine })
      totalFines += fine
    }
  }

  return JSON.stringify({ totalFines, cars: fined })
}
