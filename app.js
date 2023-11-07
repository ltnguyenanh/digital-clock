// ECHO is on.
const days_of_week = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const $ = (id) => document.getElementById(id);
const zero_padding = (num) => String(num).padStart(2, "0");

function clock() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();
  const ampm = h < 11 ? "AM" : "PM";
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  $("hours").innerHTML = zero_padding(h);
  $("min").innerHTML = zero_padding(m);
  $("second").innerHTML = zero_padding(s);
  $("ampm").innerHTML = ampm;

  $(days_of_week.at(day)).classList.remove("active");
  $(days_of_week[day]).classList.add("active");

  $("year").innerHTML = year;
  $("month").innerHTML = months[month];
  $("day").innerHTML = zero_padding(date);
}

setInterval(clock, 400);
