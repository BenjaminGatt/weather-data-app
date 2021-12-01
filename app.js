document.getElementById("signup-link").addEventListener("click", () => {
  document.querySelector(".page-1").classList.add("hidden");
  document.querySelector(".page-2").classList.remove("hidden");
  document.querySelector(".page-3").classList.add("hidden");
});

document.getElementById("login-link").addEventListener("click", () => {
  document.querySelector(".page-1").classList.remove("hidden");
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-3").classList.add("hidden");
});

document.getElementById("signup-btn").addEventListener("click", () => {
  document.querySelector(".page-1").classList.add("hidden");
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-3").classList.remove("hidden");
});

document.getElementById("login-btn").addEventListener("click", () => {
  document.querySelector(".page-1").classList.add("hidden");
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-3").classList.remove("hidden");
});

const r = document.querySelector(":root");

const white = getCssVar("--color-white");
const black = getCssVar("--color-black");
const greyLight = getCssVar("--color-grey-light");
const greyDark = getCssVar("--color-grey-dark");
const blueDarkest = getCssVar("--color-blue-darkest");
const blueDark = getCssVar("--color-blue-dark");
const blueMid = getCssVar("--color-blue-mid");
const blueLight = getCssVar("--color-blue-light");
const beige = getCssVar("--color-beige");
const orangeLight = getCssVar("--color-orange-light");
const orangeMid = getCssVar("--color-orange-mid");
const orangeDark = getCssVar("--color-orange-dark");
const red1 = getCssVar("--color-red-1");
const red2 = getCssVar("--color-red-2");

function getCssVar(varName) {
  // Get the styles (properties and values) for the root
  const rs = getComputedStyle(r);
  return rs.getPropertyValue(varName);
}

const weatherDataBtn = document.getElementById("weather-data-btn");
const dataComparisonBtn = document.getElementById("data-comparison-btn");
const monthlyComparisonBtn = document.getElementById("monthly-comparison-btn");
const energyComparisonBtn = document.getElementById("energy-comparison-btn");
const settingsMenuBtn = document.getElementById("settings-menu-btn");
const logoutMenuBtn = document.getElementById("logout-menu-btn");

const btnArr = [
  weatherDataBtn,
  dataComparisonBtn,
  monthlyComparisonBtn,
  energyComparisonBtn,
  settingsMenuBtn,
  logoutMenuBtn,
];

const weatherDataEl = document.getElementById("weather-data-page");
const dataComparisonEl = document.getElementById("data-comparison-page");
const monthlyComparisonEl = document.getElementById("monthly-comparison-page");
const energyComparisonEl = document.getElementById("energy-comparison-page");

const navArr = [
  weatherDataEl,
  dataComparisonEl,
  monthlyComparisonEl,
  energyComparisonEl,
];

const weatherDataYearSelect = document.getElementById(
  "weather-data-year-select"
);
const weatherDataMinTempCheckbox = document.getElementById(
  "weather-data-min-temp-checkbox"
);
const weatherDataMaxTempCheckbox = document.getElementById(
  "weather-data-max-temp-checkbox"
);
const weatherDataPrecipitationCheckbox = document.getElementById(
  "weather-data-precipitation-checkbox"
);
const weatherDataContainer2018 = document.getElementById(
  "weather-data-container-2018"
);
const weatherDataContainer2019 = document.getElementById(
  "weather-data-container-2019"
);
const weatherDataContainer2020 = document.getElementById(
  "weather-data-container-2020"
);
const defaultEl = document.getElementById("default-el");

const weatherDataYearArr = [
  weatherDataContainer2018,
  weatherDataContainer2019,
  weatherDataContainer2020,
];

weatherDataYearSelect.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    showEl(weatherDataContainer2018, weatherDataYearArr);
  } else if (weatherDataYearSelect.value == "2019") {
    showEl(weatherDataContainer2019, weatherDataYearArr);
  } else if (weatherDataYearSelect.value == "2020") {
    showEl(weatherDataContainer2020, weatherDataYearArr);
  } else {
    showEl(defaultEl, weatherDataYearArr);
  }
});

weatherDataMinTempCheckbox.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    minTemp2018ChartContainer.classList.toggle("hidden");
    minTemp2018Table.classList.toggle("hidden");
  } else if (weatherDataYearSelect.value == "2019") {
    minTemp2019ChartContainer.classList.toggle("hidden");
    minTemp2019Table.classList.toggle("hidden");
  }
});

weatherDataMaxTempCheckbox.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    maxTemp2018ChartContainer.classList.toggle("hidden");
    maxTemp2018Table.classList.toggle("hidden");
  } else if (weatherDataYearSelect.value == "2019") {
    maxTemp2019ChartContainer.classList.toggle("hidden");
    maxTemp2019Table.classList.toggle("hidden");
  }
});

weatherDataPrecipitationCheckbox.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    precipitation2018ChartContainer.classList.toggle("hidden");
    precipitation2018Table.classList.toggle("hidden");
  } else if (weatherDataYearSelect.value == "2019") {
    precipitation2019ChartContainer.classList.toggle("hidden");
    precipitation2019Table.classList.toggle("hidden");
  }
});

weatherDataBtn.addEventListener("click", function () {
  highlightBtn(weatherDataBtn);
  showEl(weatherDataEl, navArr);
});

dataComparisonBtn.addEventListener("click", function () {
  highlightBtn(dataComparisonBtn);
  showEl(dataComparisonEl, navArr);
});

monthlyComparisonBtn.addEventListener("click", function () {
  highlightBtn(monthlyComparisonBtn);
  showEl(monthlyComparisonEl, navArr);
});

energyComparisonBtn.addEventListener("click", function () {
  highlightBtn(energyComparisonBtn);
  showEl(energyComparisonEl, navArr);
});

settingsMenuBtn.addEventListener("click", function () {
  highlightBtn(settingsMenuBtn);
});

logoutMenuBtn.addEventListener("click", function () {
  highlightBtn(weatherDataBtn);
  showEl(weatherDataEl, navArr);
  document.querySelector(".page-1").classList.remove("hidden");
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-3").classList.add("hidden");
});

function showEl(el, elArray) {
  elArray.forEach((element) => {
    if (element !== el) {
      element.classList.add("hidden");
    }
  });
  el.classList.remove("hidden");
}

function highlightBtn(btn) {
  btnArr.forEach((button) => {
    if (button !== btn) {
      button.classList.remove("menu-selected");
    }
  });
  btn.classList.add("menu-selected");
}

const monthsArr = [
  "January",
  "Fenbruary",
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

const minTemp2018Chart = document
  .getElementById("min-temp-2018-chart")
  .getContext("2d");
const maxTemp2018Chart = document
  .getElementById("max-temp-2018-chart")
  .getContext("2d");
const precipitation2018Chart = document
  .getElementById("precipitation-2018-chart")
  .getContext("2d");

const minTemp2018ChartContainer = document.getElementById(
  "min-temp-2018-chart-container"
);
const maxTemp2018ChartContainer = document.getElementById(
  "max-temp-2018-chart-container"
);
const precipitation2018ChartContainer = document.getElementById(
  "precipitation-2018-chart-container"
);
const minTemp2018Table = document.getElementById("min-temp-2018-table");
const maxTemp2018Table = document.getElementById("max-temp-2018-table");
const precipitation2018Table = document.getElementById(
  "precipitation-2018-table"
);
const minTemp2018Arr = [8, 7, 9, 10, 13, 17, 20, 21, 18, 14, 11, 6];
const maxTemp2018Arr = [19, 18, 23, 26, 28, 31, 35, 33, 35, 27, 24, 19];
const precipitation2018Arr = [
  0.5, 135.2, 31.7, 34.2, 4.1, 10.3, 0, 22.1, 5, 217.8, 54.5, 17,
];

const minTemp2019Chart = document
  .getElementById("min-temp-2019-chart")
  .getContext("2d");
const maxTemp2019Chart = document
  .getElementById("max-temp-2019-chart")
  .getContext("2d");
const precipitation2019Chart = document
  .getElementById("precipitation-2019-chart")
  .getContext("2d");
const minTemp2019ChartContainer = document.getElementById(
  "min-temp-2019-chart-container"
);
const maxTemp2019ChartContainer = document.getElementById(
  "max-temp-2019-chart-container"
);
const precipitation2019ChartContainer = document.getElementById(
  "precipitation-2019-chart-container"
);
const minTemp2019Table = document.getElementById("min-temp-2019-table");
const maxTemp2019Table = document.getElementById("max-temp-2019-table");
const precipitation2019Table = document.getElementById(
  "precipitation-2019-table"
);
const minTemp2019Arr = [4, 4, 9, 9, 10, 15, 21, 22, 19, 16, 10, 7];
const maxTemp2019Arr = [17, 19, 21, 28, 26, 37, 39, 35, 31, 29, 25, 22];
const precipitation2019Arr = [
  64.9, 39.1, 56.8, 27.5, 21.2, 0, 1.3, 0.2, 78.4, 106, 129.3, 34.6,
];

let minTemp2018JS = new Chart(minTemp2018Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: minTemp2018Arr,
        backgroundColor: [blueMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Minimum Temperature 2018",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});

let maxTemp2018JS = new Chart(maxTemp2018Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: maxTemp2018Arr,
        backgroundColor: [red2],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Maximum Temperature 2018",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});

let precipitation2018JS = new Chart(precipitation2018Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: precipitation2018Arr,
        backgroundColor: [blueMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Rainfall in 2018",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Millimetres",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});

let minTemp2019JS = new Chart(minTemp2019Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: [4, 4, 9, 9, 10, 15, 21, 22, 19, 16, 10, 7],
        backgroundColor: [blueMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Minimum Temperature 2019",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});

let maxTemp2019JS = new Chart(maxTemp2019Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: maxTemp2019Arr,
        backgroundColor: [red2],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Maximum Temperature 2019",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});

let precipitation2019JS = new Chart(precipitation2019Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: precipitation2019Arr,
        backgroundColor: [blueMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Rainfall in 2019",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Millimetres",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        title: {
          display: false,
        },
      },
    },
  },
});
