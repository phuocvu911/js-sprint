function printPrettyDate(date) {
  const day = date.getDay()
  const month = date.getMonth()
  const dateOfWeek = date.getDate()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  let noon = "AM"
  if (hours > 12) {
    noon = "PM"
  }
  console.log(
    `Today is ${day}, ${month} ${dateOfWeek}, ${year}, and the time is ${hours}:${minutes}:${seconds} ${noon}`,
  )
}
