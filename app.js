//Q no 1 
//A no 1 

document.writeln(new Date())

//Q no 2 
//A no 2 

let monthNames = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
let currentDate = new Date()
let monthIndex = currentDate.getMonth()
let currentMonth = monthNames[monthIndex]
console.log(currentMonth)

//Q no 3 
//A no 3 

let days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
let date2 = new Date()
let day = date2.getDay()
let newDays = days[day]
console.log(newDays)


//Q no 4 
//A no 4 
let days1 = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
let date3 = new Date()
let funday = date3.getDay()
let mainDay = days1[funday]
if (mainDay == "saturday" || mainDay == "Sunday") {
    console.log("yahooooooooooooooo its Funday")
}


//Q No 5 
//A no 5 
let newdate = new Date()
let mainDate = newdate.getDate()
if (mainDate <= 15) {
    console.log("First fifteen days of the month ")
} else {
    console.log("Last fifteen days of the month")
}


//Q no 6
//Q no 6 
let date4 = new Date()
let time = date4.getTime()
console.log("Elasped milliseconds since January 1,1970:", time)
time = Math.round(time / 60)
console.log("Elsa minutes since jan 1, 1970 ", time);


//Q no 7 
//A no 7
let time1 = new Date()
let todayTime = time1.getHours()
if( todayTime >= 12 ){
    console.log("Its PM")
}else {
    console.log("its AM")
}


//Q no 8 
//A no 8 
let laterDate = new Date("31 dec 2020")
console.log(laterDate)


//Q no 9 
//A no 9 

let date5 = new Date()
let current = date5.getTime()
let newDate = new Date ("18 june 2015")
let year15 = newDate.getTime()
let total = current - year15 
console.log(total)
total = Math.round(total / (1000*60*60*24))
console.log(`The remaning days of ramzan ${total}`) 













