// Save this thing somewhere where you can access this
const options = {
  weekday: "long", // sunday - saturday
  month: "short", // month is month
  day: "numeric", // this is the date
  dayPeriod: "narrow",
};

const currentTime = Date.now();
const formattedTimeParts = new Intl.DateTimeFormat(
  "en-Us",
  options,
).formatToParts(currentTime);

const weekday = formattedTimeParts.find((p) => p.type === "weekday").value;
const month = formattedTimeParts.find((p) => p.type === "month").value;
const day = formattedTimeParts.find((p) => p.type === "day").value;
const dayPeriod = formattedTimeParts.find((p) => p.type === "dayPeriod").value; // doing the next step in one line is so very confusing man
// const greetin2 =
//   dayPeriod.split(" ").at(-1).charAt(0).toUpperCase() +
//   dayPeriod.split(" ").at(-1).slice(1);
// console.log(greetin2);

const greeting =
  dayPeriod
    .slice(dayPeriod.lastIndexOf(" ") + 1)
    .charAt(0)
    .toUpperCase() + dayPeriod.slice(dayPeriod.lastIndexOf(" ") + 1).slice(1);
