const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
} // get number of days in given month of some year

let dayInWeek = document.getElementById("day-in-week");
let dayInMonth = document.getElementById("day-in-month");
let monthAndYear = document.getElementById("month-and-year");

dayInWeek.innerHTML = daysInWeek[d.getDay()]; // display current weekday
dayInMonth.innerHTML = d.getDate(); // display current's day
monthAndYear.innerHTML = `${months[d.getMonth()]} ${d.getFullYear()}`; // display current month and year

let daysOfMonth = document.getElementsByClassName("day-in-month-calendar");
let day = 1;

// set number of days in month in calendar
for (
    let i = new Date(d.getFullYear(), d.getMonth(), 1).getDay() - 1;
    i < daysInMonth(d.getMonth() + 1, d.getFullYear());
    i++
) {
    if (day == d.getDate()) daysOfMonth[i].classList.add("current-day");

    daysOfMonth[i].innerHTML = day;
    day++;
}
