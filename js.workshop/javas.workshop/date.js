var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');

var validDate = document.getElementById('message');

function val() {
if ((year.value > 1900 && year.value < 2025) && day.value >= 1 &&
    (((month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) && day.value <= 30) ||
        ((month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || 
         month.value == 10 || month.value == 12) && day.value <= 31) ||
        (month.value == 2 && day.value <= 28))) {
    validDate.innerHTML = `La Date vous avez entre est valid ${day.value} / ${month.value} / ${year.value}`
} else {
    validDate.innerHTML = `La Date vous avez entre est invalid ${day.value} / ${month.value} / ${year.value}`
}

}