function printPrettyDate(date) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" })
  const month = date.toLocaleDateString("en-US", { month: "long" })
  const dateOfWeek = date.getDate()
  const year = date.toLocaleDateString("en-US", { year: "numeric" })
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  let noon = "AM"
  if (hours > 12) {
    hours -= 12
    noon = "PM"
  }

  hours = String(hours).padStart(2, "0")
  console.log(
    `Today is ${day}, ${month} ${dateOfWeek}, ${year}, and the time is ${hours}:${minutes}:${seconds} ${noon}.`,
  )
}
