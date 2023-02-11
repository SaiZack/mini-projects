year = document.getElementById('year')
month = document.getElementById('month')
day = document.getElementById('day')

var anniversary = new Date("2021-03-10");
var today = new Date();
var diffYears = today.getFullYear() - anniversary.getFullYear();
var diffMonths = today.getMonth() - anniversary.getMonth();
if (today.getMonth() < anniversary.getMonth() || (today.getMonth() == anniversary.getMonth() && today.getDate() < anniversary.getDate())) {
    diffYears--;
    diffMonths = (12 - anniversary.getMonth()) + today.getMonth();
}
var diffDays = today.getDate() - anniversary.getDate();
if (today.getDate() < anniversary.getDate()) {
    diffMonths--;
    var daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    diffDays = daysInPreviousMonth - anniversary.getDate() + today.getDate();
}
console.log(diffYears + " years, " + diffMonths + " months, and " + diffDays + " days");

year.innerHTML = diffYears;
month.innerHTML = diffMonths;
day.innerHTML = diffDays;
