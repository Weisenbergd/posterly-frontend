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

export function formatDate(date) {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  date = [months[month], day].join(" ");
  date = [date, year].join(", ");

  let hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  let pm = false;
  if (hour / 12 >= 1) {
    pm = true;
  }
  if (hour / 12 === 0) {
    hour = 12;
  }
  if (pm) {
    hour = hour % 12;
  }

  if (pm) {
    pm = "pm";
  } else {
    pm = "am";
  }

  let time = [hour, minute].join(":");
  time = [time, pm].join("");
  date = [date, time].join(" at ");

  return date;
}
