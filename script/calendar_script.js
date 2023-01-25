months = [
  {
    id: "1",
    name: "Janvier",
    nbDay: "31",
    firstDay: "7",
  },
  {
    id: "2",
    name: "Février",
    nbDay: "28",
    firstDay: "3",
  },
  {
    id: "3",
    name: "Mars",
    nbDay: "31",
    firstDay: "3",
  },
  {
    id: "4",
    name: "Avril",
    nbDay: "30",
    firstDay: "6",
  },
  {
    id: "5",
    name: "Mai",
    nbDay: "31",
    firstDay: "1",
  },
  {
    id: "6",
    name: "Juin",
    nbDay: "30",
    firstDay: "4",
  },
  {
    id: "7",
    name: "Juillet",
    nbDay: "31",
    firstDay: "6",
  },
  {
    id: "8",
    name: "Août",
    nbDay: "31",
    firstDay: "2",
  },
  {
    id: "9",
    name: "Septembre",
    nbDay: "30",
    firstDay: "5",
  },
  {
    id: "10",
    name: "Octobre",
    nbDay: "31",
    firstDay: "7",
  },
  {
    id: "11",
    name: "Novembre",
    nbDay: "30",
    firstDay: "3",
  },
  {
    id: "12",
    name: "Décembre",
    nbDay: "31",
    firstDay: "5",
  },
];
days = [
  {
    id: "1",
    name: "Lun",
  },
  {
    id: "2",
    name: "Mar",
  },
  {
    id: "3",
    name: "Mer",
  },
  {
    id: "4",
    name: "Jeu",
  },
  {
    id: "5",
    name: "Ven",
  },
  {
    id: "6",
    name: "Sam",
  },
  {
    id: "7",
    name: "Dim",
  },
];

let month = 1;
let year = 2023;
let firstDayOfMonth = months[month - 1].firstDay;
let dayName = days[firstDayOfMonth - 1].name;
let dayNum = days[firstDayOfMonth - 1].id;
let newWeek;
let newDay;
let weeks = document.getElementById("weeks");
let monthYear = document.getElementById("MonthYear");

// Set the month and year in the calendar header
monthYear.innerHTML = months[month - 1].name + " " + year;

// Right arrow event - move to the next month
document.getElementById("monthAhead").addEventListener("click", function () {
  month++;
  if (month > 12) {
    year++;
    month = months[0].id;
  }
  firstDayOfMonth = months[month - 1].firstDay;
  dayNum = days[firstDayOfMonth - 1].id;
  monthYear.innerHTML = months[month - 1].name + " " + year;
  weeks.innerHTML = "";
  createWeeks();
});

// Left arrow event - move to the previous month
document.getElementById("monthBack").addEventListener("click", function () {
  month--;
  if (month < 1) {
    year--;
    month = months[11].id;
  }
  firstDayOfMonth = months[month - 1].firstDay;
  dayNum = days[firstDayOfMonth - 1].id;
  monthYear.innerHTML = months[month - 1].name + " " + year;
  weeks.innerHTML = "";
  createWeeks();
});

// Create the weeks of a month
function createWeeks() {
  for (let numDay = 0; numDay < months[month - 1].nbDay; numDay++) {
    dayName = days[dayNum - 1].name;

    if (dayName == "Lun" || numDay == 0) {
      newWeek = document.createElement("tr");
    }

    if (numDay == 0) {
      for (
        let dayOfWeek = numDay;
        dayOfWeek < firstDayOfMonth - 1;
        dayOfWeek++
      ) {
        newDay = document.createElement("td");
        newWeek.append(newDay);
      }
    }

    newDay = document.createElement("td");
    newDay.innerText = numDay + 1;
    newWeek.append(newDay);

    if (dayNum < 7) {
      dayNum++;
    } else {
      dayNum = 1;
    }

    if (dayName == "Dim" || numDay == months[month - 1].nbDay - 1) {
      weeks.append(newWeek);
    }
  }
}

document.addEventListener("DOMContentLoaded", createWeeks());
