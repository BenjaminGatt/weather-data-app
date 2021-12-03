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

const colours = {
  white: getCssVar("--color-white"),
  black: getCssVar("color-black"),
  greyLight: getCssVar("--color-grey-light"),
  greyDark: getCssVar("--color-grey-dark"),
  blueDarkest: getCssVar("--color-blue-darkest"),
  blueDark: getCssVar("--color-blue-dark"),
  blueMid: getCssVar("--color-blue-mid"),
  blueLight: getCssVar("--color-blue-light"),
  beige: getCssVar("--color-beige"),
  orangeLight: getCssVar("--color-orange-light"),
  orangeMid: getCssVar("--color-orange-mid"),
  orangeDark: getCssVar("--color-orange-dark"),
  red1: getCssVar("--color-red-1"),
  red2: getCssVar("--color-red-2"),
};

function getCssVar(varName) {
  // Get the styles (properties and values) for the root
  const rs = getComputedStyle(r);
  return rs.getPropertyValue(varName);
}

const btns = {
  weatherDataBtn: document.getElementById("weather-data-btn"),
  dataComparisonBtn: document.getElementById("data-comparison-btn"),
  monthlyComparisonBtn: document.getElementById("monthly-comparison-btn"),
  energyComparisonBtn: document.getElementById("energy-comparison-btn"),
  settingsMenuBtn: document.getElementById("settings-menu-btn"),
  logoutMenuBtn: document.getElementById("logout-menu-btn"),
};

const btnArr = [
  btns.weatherDataBtn,
  btns.dataComparisonBtn,
  btns.monthlyComparisonBtn,
  btns.energyComparisonBtn,
  btns.settingsMenuBtn,
  btns.logoutMenuBtn,
];

const dataPages = {
  weatherDataEl: document.getElementById("weather-data-page"),
  dataComparisonEl: document.getElementById("data-comparison-page"),
  monthlyComparisonEl: document.getElementById("monthly-comparison-page"),
  energyComparisonEl: document.getElementById("energy-comparison-page"),
};

const navArr = [
  dataPages.weatherDataEl,
  dataPages.dataComparisonEl,
  dataPages.monthlyComparisonEl,
  dataPages.energyComparisonEl,
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

const dataComparisonMinTempCheckbox = document.getElementById(
  "data-comparison-min-temp-checkbox"
);
const dataComparisonMaxTempCheckbox = document.getElementById(
  "data-comparison-max-temp-checkbox"
);
const dataComparisonPrecipitationCheckbox = document.getElementById(
  "data-comparison-precipitation-checkbox"
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

function resetCheckBoxes(year) {
  if (year.minTemp == true) {
    weatherDataMinTempCheckbox.checked = true;
  } else {
    weatherDataMinTempCheckbox.checked = false;
  }

  if (year.precipitation == true) {
    weatherDataPrecipitationCheckbox.checked = true;
  } else {
    weatherDataPrecipitationCheckbox.checked = false;
  }
}

const checkBoxes2018 = {
  minTemp: true,
  precipitation: true,
};

const checkBoxes2019 = {
  minTemp: true,
  precipitation: true,
};

const checkBoxes2020 = {
  minTemp: true,
  precipitation: true,
};

weatherDataYearSelect.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    showEl(weatherDataContainer2018, weatherDataYearArr);
    resetCheckBoxes(checkBoxes2018);
  } else if (weatherDataYearSelect.value == "2019") {
    showEl(weatherDataContainer2019, weatherDataYearArr);
    resetCheckBoxes(checkBoxes2019);
  } else if (weatherDataYearSelect.value == "2020") {
    showEl(weatherDataContainer2020, weatherDataYearArr);
    resetCheckBoxes(checkBoxes2020);
  } else {
    showEl(defaultEl, weatherDataYearArr);
  }
});

weatherDataMinTempCheckbox.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    if (weatherDataMinTempCheckbox.checked) {
      checkBoxes2018.minTemp = true;
      minTemp2018ChartContainer.classList.remove("hidden");
      minTemp2018Table.classList.remove("hidden");
    } else {
      checkBoxes2018.minTemp = false;
      minTemp2018ChartContainer.classList.add("hidden");
      minTemp2018Table.classList.add("hidden");
    }
  } else if (weatherDataYearSelect.value == "2019") {
    if (weatherDataMinTempCheckbox.checked) {
      checkBoxes2019.minTemp = true;
      minTemp2019ChartContainer.classList.remove("hidden");
      minTemp2019Table.classList.remove("hidden");
    } else {
      checkBoxes2019.minTemp = false;
      minTemp2019ChartContainer.classList.add("hidden");
      minTemp2019Table.classList.add("hidden");
    }
  } else if (weatherDataYearSelect.value == "2020") {
    if (weatherDataMinTempCheckbox.checked) {
      checkBoxes2020.minTemp = true;
      minTemp2020ChartContainer.classList.remove("hidden");
      minTemp2020Table.classList.remove("hidden");
    } else {
      checkBoxes2020.minTemp = false;
      minTemp2020ChartContainer.classList.add("hidden");
      minTemp2020Table.classList.add("hidden");
    }
  }
});

// weatherDataMaxTempCheckbox.addEventListener("change", () => {
//   if (weatherDataYearSelect.value == "2018") {
//     if (weatherDataMaxTempCheckbox.checked) {
//       checkBoxes2018.maxTemp = true;
//       maxTemp2018ChartContainer.classList.remove("hidden");
//       maxTemp2018Table.classList.remove("hidden");
//     } else {
//       checkBoxes2018.maxTemp = false;
//       maxTemp2018ChartContainer.classList.add("hidden");
//       maxTemp2018Table.classList.add("hidden");
//     }
//   } else if (weatherDataYearSelect.value == "2019") {
//     if (weatherDataMaxTempCheckbox.checked) {
//       checkBoxes2019.maxTemp = true;
//       maxTemp2019ChartContainer.classList.remove("hidden");
//       maxTemp2019Table.classList.remove("hidden");
//     } else {
//       checkBoxes2019.maxTemp = false;
//       maxTemp2019ChartContainer.classList.add("hidden");
//       maxTemp2019Table.classList.add("hidden");
//     }
//   } else if (weatherDataYearSelect.value == "2020") {
//     if (weatherDataMaxTempCheckbox.checked) {
//       checkBoxes2020.maxTemp = true;
//       maxTemp2020ChartContainer.classList.remove("hidden");
//       maxTemp2020Table.classList.remove("hidden");
//     } else {
//       checkBoxes2020.maxTemp = false;
//       maxTemp2020ChartContainer.classList.add("hidden");
//       maxTemp2020Table.classList.add("hidden");
//     }
//   }
// });

weatherDataPrecipitationCheckbox.addEventListener("change", () => {
  if (weatherDataYearSelect.value == "2018") {
    if (weatherDataPrecipitationCheckbox.checked) {
      checkBoxes2018.precipitation = true;
      precipitation2018ChartContainer.classList.remove("hidden");
      precipitation2018Table.classList.remove("hidden");
    } else {
      checkBoxes2018.precipitation = false;
      precipitation2018ChartContainer.classList.add("hidden");
      precipitation2018Table.classList.add("hidden");
    }
  } else if (weatherDataYearSelect.value == "2019") {
    if (weatherDataPrecipitationCheckbox.checked) {
      checkBoxes2019.precipitation = true;
      precipitation2019ChartContainer.classList.remove("hidden");
      precipitation2019Table.classList.remove("hidden");
    } else {
      checkBoxes2019.precipitation = false;
      precipitation2019ChartContainer.classList.add("hidden");
      precipitation2019Table.classList.add("hidden");
    }
  } else if (weatherDataYearSelect.value == "2020") {
    if (weatherDataPrecipitationCheckbox.checked) {
      checkBoxes2020.precipitation = true;
      precipitation2020ChartContainer.classList.remove("hidden");
      precipitation2020Table.classList.remove("hidden");
    } else {
      checkBoxes2020.precipitation = false;
      precipitation2020ChartContainer.classList.add("hidden");
      precipitation2020Table.classList.add("hidden");
    }
  }
});

dataComparisonMinTempCheckbox.addEventListener("change", () => {
  minTempDCChartContainer.classList.toggle("hidden");
  minTempDCTable.classList.toggle("hidden");
});

dataComparisonMaxTempCheckbox.addEventListener("change", () => {
  maxTempDCChartContainer.classList.toggle("hidden");
  maxTempDCTable.classList.toggle("hidden");
});

dataComparisonPrecipitationCheckbox.addEventListener("change", () => {
  precipitationDCChartContainer.classList.toggle("hidden");
  precipitationDCTable.classList.toggle("hidden");
});

btns.weatherDataBtn.addEventListener("click", function () {
  highlightBtn(btns.weatherDataBtn);
  showEl(dataPages.weatherDataEl, navArr);
});

btns.dataComparisonBtn.addEventListener("click", function () {
  highlightBtn(btns.dataComparisonBtn);
  showEl(dataPages.dataComparisonEl, navArr);
});

btns.monthlyComparisonBtn.addEventListener("click", function () {
  highlightBtn(btns.monthlyComparisonBtn);
  showEl(dataPages.monthlyComparisonEl, navArr);
});

btns.energyComparisonBtn.addEventListener("click", function () {
  highlightBtn(btns.energyComparisonBtn);
  showEl(dataPages.energyComparisonEl, navArr);
});

btns.settingsMenuBtn.addEventListener("click", function () {
  highlightBtn(btns.settingsMenuBtn);
});

btns.logoutMenuBtn.addEventListener("click", function () {
  highlightBtn(btns.weatherDataBtn);
  showEl(dataPages.weatherDataEl, navArr);
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
// const maxTemp2018Chart = document
//   .getElementById("max-temp-2018-chart")
//   .getContext("2d");
const precipitation2018Chart = document
  .getElementById("precipitation-2018-chart")
  .getContext("2d");

const minTemp2018ChartContainer = document.getElementById(
  "min-temp-2018-chart-container"
);
// const maxTemp2018ChartContainer = document.getElementById(
//   "max-temp-2018-chart-container"
// );
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
const maxTempStacked2018Arr = [
  maxTemp2018Arr[0] - minTemp2018Arr[0],
  maxTemp2018Arr[1] - minTemp2018Arr[1],
  maxTemp2018Arr[2] - minTemp2018Arr[2],
  maxTemp2018Arr[3] - minTemp2018Arr[3],
  maxTemp2018Arr[4] - minTemp2018Arr[4],
  maxTemp2018Arr[5] - minTemp2018Arr[5],
  maxTemp2018Arr[6] - minTemp2018Arr[6],
  maxTemp2018Arr[7] - minTemp2018Arr[7],
  maxTemp2018Arr[8] - minTemp2018Arr[8],
  maxTemp2018Arr[9] - minTemp2018Arr[9],
  maxTemp2018Arr[10] - minTemp2018Arr[10],
  maxTemp2018Arr[11] - minTemp2018Arr[11],
];
const precipitation2018Arr = [
  0.5, 135.2, 31.7, 34.2, 4.1, 10.3, 0, 22.1, 5, 217.8, 54.5, 17,
];

const minTemp2019Chart = document
  .getElementById("min-temp-2019-chart")
  .getContext("2d");
// const maxTemp2019Chart = document
//   .getElementById("max-temp-2019-chart")
//   .getContext("2d");
const precipitation2019Chart = document
  .getElementById("precipitation-2019-chart")
  .getContext("2d");
const minTemp2019ChartContainer = document.getElementById(
  "min-temp-2019-chart-container"
);
// const maxTemp2019ChartContainer = document.getElementById(
//   "max-temp-2019-chart-container"
// );
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
const maxTempStacked2019Arr = [
  maxTemp2019Arr[0] - minTemp2019Arr[0],
  maxTemp2019Arr[1] - minTemp2019Arr[1],
  maxTemp2019Arr[2] - minTemp2019Arr[2],
  maxTemp2019Arr[3] - minTemp2019Arr[3],
  maxTemp2019Arr[4] - minTemp2019Arr[4],
  maxTemp2019Arr[5] - minTemp2019Arr[5],
  maxTemp2019Arr[6] - minTemp2019Arr[6],
  maxTemp2019Arr[7] - minTemp2019Arr[7],
  maxTemp2019Arr[8] - minTemp2019Arr[8],
  maxTemp2019Arr[9] - minTemp2019Arr[9],
  maxTemp2019Arr[10] - minTemp2019Arr[10],
  maxTemp2019Arr[11] - minTemp2019Arr[11],
];
const precipitation2019Arr = [
  64.9, 39.1, 56.8, 27.5, 21.2, 0, 1.3, 0.2, 78.4, 106, 129.3, 34.6,
];

const minTemp2020Chart = document
  .getElementById("min-temp-2020-chart")
  .getContext("2d");
// const maxTemp2020Chart = document
//   .getElementById("max-temp-2020-chart")
//   .getContext("2d");
const precipitation2020Chart = document
  .getElementById("precipitation-2020-chart")
  .getContext("2d");

const minTemp2020ChartContainer = document.getElementById(
  "min-temp-2020-chart-container"
);
// const maxTemp2020ChartContainer = document.getElementById(
//   "max-temp-2020-chart-container"
// );
const precipitation2020ChartContainer = document.getElementById(
  "precipitation-2020-chart-container"
);
const minTemp2020Table = document.getElementById("min-temp-2020-table");
const maxTemp2020Table = document.getElementById("max-temp-2020-table");
const precipitation2020Table = document.getElementById(
  "precipitation-2020-table"
);
const minTemp2020Arr = [5, 6, 8, 10, 13, 16, 21, 23, 18, 13, 12, 9];
const maxTemp2020Arr = [18, 19, 22, 25, 32, 32, 36, 38, 32, 30, 24, 21];
const maxTempStacked2020Arr = [
  maxTemp2020Arr[0] - minTemp2020Arr[0],
  maxTemp2020Arr[1] - minTemp2020Arr[1],
  maxTemp2020Arr[2] - minTemp2020Arr[2],
  maxTemp2020Arr[3] - minTemp2020Arr[3],
  maxTemp2020Arr[4] - minTemp2020Arr[4],
  maxTemp2020Arr[5] - minTemp2020Arr[5],
  maxTemp2020Arr[6] - minTemp2020Arr[6],
  maxTemp2020Arr[7] - minTemp2020Arr[7],
  maxTemp2020Arr[8] - minTemp2020Arr[8],
  maxTemp2020Arr[9] - minTemp2020Arr[9],
  maxTemp2020Arr[10] - minTemp2020Arr[10],
  maxTemp2020Arr[11] - minTemp2020Arr[11],
];
const precipitation2020Arr = [
  8.9, 0.5, 33.2, 8.2, 6.6, 0, 0.3, 0, 133.7, 32.5, 86.6, 94.1,
];

const minTempDCChart = document
  .getElementById("min-temp-DC-chart")
  .getContext("2d");

const minTempDCChartContainer = document.getElementById(
  "min-temp-DC-chart-container"
);

const maxTempDCChart = document
  .getElementById("max-temp-DC-chart")
  .getContext("2d");

const maxTempDCChartContainer = document.getElementById(
  "max-temp-DC-chart-container"
);

const precipitationDCChart = document
  .getElementById("precipitation-DC-chart")
  .getContext("2d");

const precipitationDCChartContainer = document.getElementById(
  "precipitation-DC-chart-container"
);

const minTempDCTable = document.getElementById("min-temp-DC-table");
const maxTempDCTable = document.getElementById("max-temp-DC-table");
const precipitationDCTable = document.getElementById("precipitation-DC-table");

let minTemp2018JS = new Chart(minTemp2018Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        label: "Min",
        data: minTemp2018Arr,
        backgroundColor: [colours.blueMid],
      },
      {
        label: "Max",
        data: maxTempStacked2018Arr,
        backgroundColor: [colours.red2],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              minTemp2018JS.data.datasets[tooltipItem.datasetIndex].label;
            let value = null;

            if (tooltipItem.datasetIndex === 0) {
              value =
                minTemp2018JS.data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.dataIndex
                ];
            } else if (tooltipItem.datasetIndex === 1) {
              value = maxTemp2018Arr[tooltipItem.dataIndex];
            }

            return label + ": " + value + "\xB0C";
          },
        },
      },
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
        stacked: true,
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        stacked: true,
        title: {
          display: false,
        },
      },
    },
  },
});

// let maxTemp2018JS = new Chart(maxTemp2018Chart, {
//   type: "bar",
//   data: {
//     labels: monthsArr,
//     datasets: [
//       {
//         data: maxTemp2018Arr,
//         backgroundColor: [colours.red2],
//       },
//     ],
//   },
//   /* Use OPTIONS to create graph title, legend, and label axes. */
//   options: {
//     plugins: {
//       title: {
//         text: "Maximum Temperature 2018",
//         display: true,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       yAxes: {
//         title: {
//           display: true,
//           text: "Degrees Celsius",
//           font: {
//             size: 15,
//           },
//         },
//       },
//       xAxes: {
//         title: {
//           display: false,
//         },
//       },
//     },
//   },
// });

let precipitation2018JS = new Chart(precipitation2018Chart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: precipitation2018Arr,
        fill: false,
        borderColor: [colours.blueMid],
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
    elements: {
      point: {
        radius: 5,
        backgroundColor: colours.orangeMid,
      },
      line: {
        tension: 0.15,
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
        label: "Min",
        data: minTemp2019Arr,
        backgroundColor: [colours.blueMid],
      },
      {
        label: "Max",
        data: maxTempStacked2019Arr,
        backgroundColor: [colours.red2],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              minTemp2019JS.data.datasets[tooltipItem.datasetIndex].label;
            let value = null;

            if (tooltipItem.datasetIndex === 0) {
              value =
                minTemp2019JS.data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.dataIndex
                ];
            } else if (tooltipItem.datasetIndex === 1) {
              value = maxTemp2019Arr[tooltipItem.dataIndex];
            }

            return label + ": " + value + "\xB0C";
          },
        },
      },
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
        stacked: true,
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        stacked: true,
        title: {
          display: false,
        },
      },
    },
  },
});

// let maxTemp2019JS = new Chart(maxTemp2019Chart, {
//   type: "bar",
//   data: {
//     labels: monthsArr,
//     datasets: [
//       {
//         data: maxTemp2019Arr,
//         backgroundColor: [colours.red2],
//       },
//     ],
//   },
//   /* Use OPTIONS to create graph title, legend, and label axes. */
//   options: {
//     plugins: {
//       title: {
//         text: "Maximum Temperature 2019",
//         display: true,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       yAxes: {
//         title: {
//           display: true,
//           text: "Degrees Celsius",
//           font: {
//             size: 15,
//           },
//         },
//       },
//       xAxes: {
//         title: {
//           display: false,
//         },
//       },
//     },
//   },
// });

let precipitation2019JS = new Chart(precipitation2019Chart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: precipitation2019Arr,
        borderColor: [colours.blueMid],
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
    elements: {
      point: {
        radius: 5,
        backgroundColor: colours.orangeMid,
      },
      line: {
        tension: 0.15,
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

let minTemp2020JS = new Chart(minTemp2020Chart, {
  type: "bar",
  data: {
    labels: monthsArr,
    datasets: [
      {
        label: "Min",
        data: minTemp2020Arr,
        backgroundColor: [colours.blueMid],
      },
      {
        label: "Max",
        data: maxTempStacked2020Arr,
        backgroundColor: [colours.red2],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              minTemp2020JS.data.datasets[tooltipItem.datasetIndex].label;
            let value = null;

            if (tooltipItem.datasetIndex === 0) {
              value =
                minTemp2020JS.data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.dataIndex
                ];
            } else if (tooltipItem.datasetIndex === 1) {
              value = maxTemp2020Arr[tooltipItem.dataIndex];
            }

            return label + ": " + value + "\xB0C";
          },
        },
      },
      title: {
        text: "Minimum Temperature 2020",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        stacked: true,
        title: {
          display: true,
          text: "Degrees Celsius",
          font: {
            size: 15,
          },
        },
      },
      xAxes: {
        stacked: true,
        title: {
          display: false,
        },
      },
    },
  },
});

// let maxTemp2020JS = new Chart(maxTemp2020Chart, {
//   type: "bar",
//   data: {
//     labels: monthsArr,
//     datasets: [
//       {
//         data: maxTemp2020Arr,
//         backgroundColor: [colours.red2],
//       },
//     ],
//   },
//   /* Use OPTIONS to create graph title, legend, and label axes. */
//   options: {
//     plugins: {
//       title: {
//         text: "Maximum Temperature 2020",
//         display: true,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       yAxes: {
//         title: {
//           display: true,
//           text: "Degrees Celsius",
//           font: {
//             size: 15,
//           },
//         },
//       },
//       xAxes: {
//         title: {
//           display: false,
//         },
//       },
//     },
//   },
// });

let precipitation2020JS = new Chart(precipitation2020Chart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        data: precipitation2020Arr,
        borderColor: [colours.blueMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    plugins: {
      title: {
        text: "Rainfall in 2020",
        display: true,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 5,
        backgroundColor: colours.orangeMid,
      },
      line: {
        tension: 0.15,
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

let minTempDCJS = new Chart(minTempDCChart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        label: "2018",
        data: minTemp2018Arr,
        backgroundColor: [colours.blueMid],
        borderColor: [colours.blueMid],
      },
      {
        label: "2020",
        data: minTemp2020Arr,
        backgroundColor: [colours.blueLight],
        borderColor: [colours.blueLight],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              minTempDCJS.data.datasets[tooltipItem.datasetIndex].label;
            let value =
              minTempDCJS.data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.dataIndex
              ];

            return label + ": " + value + "\xB0C";
          },
        },
      },
      title: {
        text: "Minimum Temperature in 2018 and 2020",
        display: true,
      },
      legend: {
        display: true,
      },
    },
    elements: {
      point: {
        radius: 5,
      },
      line: {
        tension: 0.15,
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

let maxTempDCJS = new Chart(maxTempDCChart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        label: "2018",
        data: maxTemp2018Arr,
        backgroundColor: [colours.red2],
        borderColor: [colours.red2],
      },
      {
        label: "2020",
        data: maxTemp2020Arr,
        backgroundColor: [colours.orangeLight],
        borderColor: [colours.orangeLight],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              maxTempDCJS.data.datasets[tooltipItem.datasetIndex].label;
            let value =
              maxTempDCJS.data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.dataIndex
              ];

            return label + ": " + value + "\xB0C";
          },
        },
      },
      title: {
        text: "Maximum Temperature in 2018 and 2020",
        display: true,
      },
      legend: {
        display: true,
      },
    },
    elements: {
      point: {
        radius: 5,
      },
      line: {
        tension: 0.15,
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

let precipitationDCJS = new Chart(precipitationDCChart, {
  type: "line",
  data: {
    labels: monthsArr,
    datasets: [
      {
        label: "2018",
        data: precipitation2018Arr,
        backgroundColor: [colours.blueMid],
        borderColor: [colours.blueMid],
      },
      {
        label: "2020",
        data: precipitation2020Arr,
        backgroundColor: [colours.orangeMid],
        borderColor: [colours.orangeMid],
      },
    ],
  },
  /* Use OPTIONS to create graph title, legend, and label axes. */
  options: {
    interaction: {
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label =
              precipitationDCJS.data.datasets[tooltipItem.datasetIndex].label;
            let value =
              precipitationDCJS.data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.dataIndex
              ];

            return label + ": " + value + "mm";
          },
        },
      },
      title: {
        text: "Precipitation in 2018 and 2020",
        display: true,
      },
      legend: {
        display: true,
      },
    },
    elements: {
      point: {
        radius: 5,
      },
      line: {
        tension: 0.15,
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
