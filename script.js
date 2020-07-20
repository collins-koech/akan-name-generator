// Business logic
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//user interface logic
function findNames() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if (day <= 0 || day > 31) {
        alert("Enter valid day")
    } else if (month <= 0 || month > 12 || (month == 2 && day > 29)) {
        alert("Enter valid month..")
    }



    var a = Math.floor((14 - month) / 12)
    var y = year - a
    var m = month + 12 * a - 2
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7

    if (male.checked == true) {
        alert("You were born on " + daysOfTheWeek[d] + " and your Akan name is: " + maleNames[d]);
    } else if (female.checked == true) {
        alert("You were born on " + daysOfTheWeek[d] + " and your Akan name is: " + femaleNames[d]);
    }
}