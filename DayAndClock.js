//New Day Object
const today = new Date();

const day = today.getDay();

//Create Days array
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//checking current day
console.log(dayList[day]);

let hour = 0; //today.getHours();
let minute = 0; //today.getMinutes();
let second = 0; //today.getSeconds();
let timePeriod = "";
let displayHour = hour % 12; //this make 12 hour format
displayHour = displayHour === 0 ? 12 : displayHour;
displayHour;

console.log(displayHour);

if (hour === 0 && minute === 0 && second === 0) {
  timePeriod = "Midnight";
} else if (hour === 12 && minute === 0 && second === 0) {
  timePeriod = "Noon";
} else {
  timePeriod = hour >= 12 ? "PM" : "AM";
}

const doubleDigitMinute = minute.toString().padStart(2, "0");
const doubleDigitSecond = second.toString().padStart(2, "0");
/*if (hour > 12) {
  if (hour === 24) {
    hour = 12;
    dayPeriod = "Midnight";
  } else {
    hour = hour - 12;
  }
} else if (hour === 12) {
  dayPeriod = "Noon";
}*/

//checking current time
console.log(
  `${displayHour} : ${doubleDigitMinute} : ${doubleDigitSecond} ${timePeriod}`
);
