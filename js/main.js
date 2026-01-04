const date_day = document.getElementById("date_day")
    , date_month = document.getElementById("date_month")
    , date_year = document.getElementById("date_year")
    , completed = document.getElementById("completed")
    , calendar_list = document.getElementById("calendar_list")
    , day = document.getElementById("day")
    , time = document.getElementById("time")

var days_arr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let DATE = new Date()
    , days = getFullDaysYear(DATE.getFullYear())
    , days_today = getTodayDaysYear(DATE.getFullYear(), DATE.getMonth(), DATE.getDate())
    , completed_num = completedCalc(days, days_today)
    , all_days
    , calendar_type = true
    , day_index = DATE.getDay()
    , time_info
    , hours = DATE.getHours()
    , minutes = DATE.getMinutes()
    , seconds = DATE.getSeconds()

day.innerHTML = days_arr[day_index]

const intervalSecond = setInterval(() => {
    DATE = new Date()
    hours = DATE.getHours()
    minutes = DATE.getMinutes()
    seconds = DATE.getSeconds()
    time_info = [hours, minutes, seconds]

    time.innerHTML = time_info.join(":")

    days_today = getTodayDaysYear(DATE.getFullYear(), DATE.getMonth(), DATE.getDate())
    days = getFullDaysYear(DATE.getFullYear())

    completed_num = completedCalc(days, days_today)

    date_day.innerHTML = DATE.getDate()
    date_month.innerHTML = DATE.getMonth() + 1
    date_year.innerHTML = DATE.getFullYear()
    completed.innerHTML = completed_num + "%"
}, 1000)

for (let i = 1; i <= days; i++) {
    const day = document.createElement("li")
    day.className = "day"
    day.textContent = i
    calendar_list.appendChild(day)
    all_days = document.querySelectorAll(".day")
}
for (let i = 0; i <= days_today; i++) {
    all_days[i].classList.add('day_complete')
    if (i === days_today) {
        all_days[i].classList.remove('day_complete')
        all_days[i].classList.add('today')
    }
}



function getFullDaysYear(year) {
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year + 1, 0, 1)
    const defDate = endDate - startDate
    const msInDay = 1000 * 60 * 60 * 24
    const days = defDate / msInDay;
    return days
}

function getTodayDaysYear(year, month, date) {
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year, month, date)
    const defDate = endDate - startDate
    const msInDay = 1000 * 60 * 60 * 24
    const days = defDate / msInDay;
    return days
}
function completedCalc(days, days_today) {
    const completed = days_today / days
    return Math.round(completed * 100 * 100) / 100
}