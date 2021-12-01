const r = document.querySelector(":root");

function getCssVar(varName) {
  // Get the styles (properties and values) for the root
  const rs = getComputedStyle(r);
  return rs.getPropertyValue(varName);
}

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

const weatherDataBtn = document.getElementById("weather-data-btn");
const dataComparisonBtn = document.getElementById("data-comparison-btn");
const monthlyComparisonBtn = document.getElementById("monthly-comparison-btn");
const energyComparisonBtn = document.getElementById("energy-comparison-btn");
const settingsMenuBtn = document.getElementById("settings-menu-btn");
const logoutMenuBtn = document.getElementById("logout-menu-btn");

const weatherDataEl = document.getElementById("weather-data-page");
const dataComparisonEl = document.getElementById("data-comparison-page");
const monthlyComparisonEl = document.getElementById("monthly-comparison-page");
const energyComparisonEl = document.getElementById("energy-comparison-page");

const btnArr = [
  weatherDataBtn,
  dataComparisonBtn,
  monthlyComparisonBtn,
  energyComparisonBtn,
  settingsMenuBtn,
  logoutMenuBtn,
];

const elArr = [
  weatherDataEl,
  dataComparisonEl,
  monthlyComparisonEl,
  energyComparisonEl,
];

const minTemp2018 = document.getElementById("min-temp-2018").getContext("2d");
const maxTemp2018 = document.getElementById("max-temp-2018").getContext("2d");
const rainfall2018 = document.getElementById("rainfall-2018").getContext("2d");

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

weatherDataBtn.addEventListener("click", function () {
  highlightBtn(weatherDataBtn);
  showEl(weatherDataEl);
});

dataComparisonBtn.addEventListener("click", function () {
  highlightBtn(dataComparisonBtn);
  showEl(dataComparisonEl);
});

monthlyComparisonBtn.addEventListener("click", function () {
  highlightBtn(monthlyComparisonBtn);
  showEl(monthlyComparisonEl);
});

energyComparisonBtn.addEventListener("click", function () {
  highlightBtn(energyComparisonBtn);
  showEl(energyComparisonEl);
});

settingsMenuBtn.addEventListener("click", function () {
  highlightBtn(settingsMenuBtn);
});

logoutMenuBtn.addEventListener("click", function () {
  highlightBtn(weatherDataBtn);
  showEl(weatherDataEl);
  document.querySelector(".page-1").classList.remove("hidden");
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-3").classList.add("hidden");
});

function showEl(el) {
  elArr.forEach((element) => {
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

let minTemp2018JS = new Chart(minTemp2018, {
  type: "bar",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        data: [8, 7, 9, 10, 13, 17, 20, 21, 18, 14, 11, 6],
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

let maxTemp2018JS = new Chart(maxTemp2018, {
  type: "bar",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        data: [19, 18, 23, 26, 28, 31, 35, 33, 35, 27, 24, 19],
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

let rainfall2018JS = new Chart(rainfall2018, {
  type: "bar",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        data: [0.5, 135.2, 31.7, 34.2, 4.1, 10.3, 0, 22.1, 5, 217.8, 54.5, 17],
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
