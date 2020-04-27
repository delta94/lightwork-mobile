export const DATE_FILTER = data => {
    const uniqueDate = [];
    let stepDate = [];
    let i = 0;
    data.map(d => {
        if (stepDate.indexOf(d.date) === -1) {
            let item = { date: d.date, id: i }
            stepDate.push(d.date)
            uniqueDate.push(item)
            i++
        }
    });
    return uniqueDate
}