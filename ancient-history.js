function classifyDate(date) {
  const now = new Date()

  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  )

  const oneYearAgo = new Date(now)
  oneYearAgo.setFullYear(now.getFullYear() - 1)
  const oneYearAhead = new Date(now)
  oneYearAhead.setFullYear(now.getFullYear() + 1)

  if (date < tomorrow) {
    return date < oneYearAgo ? "ancient" : "past"
  } else {
    return date > oneYearAhead ? "distant future" : "future"
  }
}
