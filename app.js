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

const weatherDataEl = document.getElementById("weather-data-container");
const dataComparisonEl = document.getElementById("data-comparison-container");
const monthlyComparisonEl = document.getElementById(
  "monthly-comparison-container"
);
const energyComparisonEl = document.getElementById(
  "energy-comparison-container"
);

const elArr = [
  weatherDataEl,
  dataComparisonEl,
  monthlyComparisonEl,
  energyComparisonEl,
];

const barChart = document.getElementById("bar-chart").getContext("2d");
const barChart2 = document.getElementById("bar-chart-2").getContext("2d");

document.getElementById("signup-link").addEventListener("click", () => {
  document.querySelector(".page-1").classList.add("hidden");
  document.querySelector(".page-2").classList.remove("hidden");
});

document.getElementById("login-link").addEventListener("click", () => {
  document.querySelector(".page-2").classList.add("hidden");
  document.querySelector(".page-1").classList.remove("hidden");
});

weatherDataBtn.addEventListener("click", function () {
  showEl(weatherDataEl);
});
dataComparisonBtn.addEventListener("click", function () {
  showEl(dataComparisonEl);
});
monthlyComparisonBtn.addEventListener("click", function () {
  showEl(monthlyComparisonEl);
});
energyComparisonBtn.addEventListener("click", function () {
  showEl(energyComparisonEl);
});

function showEl(el) {
  elArr.forEach((element) => {
    if (element !== el) {
      element.classList.add("hidden");
    }
  });
  el.classList.remove("hidden");
}

let barChartJS = new Chart(barChart, {
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

let barChart2JS = new Chart(barChart2, {
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
