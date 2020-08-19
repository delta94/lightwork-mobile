export const DATE_FILTER = (data) => {
  const uniqueDate = []
  const stepDate = []
  let i = 0
  data.map((d) => {
    if (stepDate.indexOf(d.date) === -1) {
      const item = { date: d.date, id: i }
      stepDate.push(d.date)
      uniqueDate.push(item)
      i++
    }
  })
  return uniqueDate
}

export const TYPE_FILTER = (data, value) => {
  let NEW_DATA = []
  if (value == 'ALL') {
    NEW_DATA = data
  } else {
    data.map((d) => {
      if (d.type == value) {
        NEW_DATA.push(d)
      }
    })
  }
  return NEW_DATA
}
