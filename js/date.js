export function today() {
  const now = new Date()

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    12
  )
}

export function addMonths(date, months) {
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + months, 
    1,
    date.getHours()
  )
  const lastDayOfMonth = getLastDayOfMonthDate(firstDayOfMonth)
}

function getLastDayOfMonthDate(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    12
  )
}