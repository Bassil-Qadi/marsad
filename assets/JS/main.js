// Function to convert numbers to Arabic numerals
function toArabicNumerals(num) {
  return num.toString().replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
}

// Select the canvas element
const ctx = document.getElementById("myLineChart").getContext("2d");
const ctx1 = document.getElementById("aiIndexChart").getContext("2d");

// Define data and configuration for the line chart
const lineChartData = {
  labels: Array.from({ length: 43 }, (_, i) => toArabicNumerals(1980 + i)), // Arabic numbers for years
  datasets: [
    {
      label: "",
      // Arabic label for "Monthly Revenue"
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 11000, 12000],
      borderColor: "#e67e22",
      borderWidth: 4,
      fill: false,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointRadius: 4,
    },
  ],
};

const lineChartConfig = {
  type: "line", // Line chart type
  data: lineChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value) {
            return toArabicNumerals(this.getLabelForValue(value)); // Convert ticks to Arabic
          },
        },
        grid: {
          drawBorder: false, // Disable the y-axis border
          display: false, // Remove y-axis grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: "عدد الأوراق العلمية", // Arabic for "Revenue (in thousands)"
        },
        min: 0,
        max: 12000,
        ticks: {
          stepSize: 2000,
          callback: function (value) {
            return toArabicNumerals(value); // Convert ticks to Arabic
          },
        },
      },
    },
    legend: {
      display: false, //This will do the task
    },
  },
};

const countryData = [
  { country: "United States", flag: "https://flagcdn.com/us.svg" },
  { country: "China", flag: "https://flagcdn.com/cn.svg" },
  { country: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
  { country: "India", flag: "https://flagcdn.com/in.svg" },
  { country: "United Arab Emirates", flag: "https://flagcdn.com/ae.svg" },
  { country: "France", flag: "https://flagcdn.com/fr.svg" },
  { country: "South Korea", flag: "https://flagcdn.com/kr.svg" },
  { country: "Germany", flag: "https://flagcdn.com/de.svg" },
  { country: "Japan", flag: "https://flagcdn.com/jp.svg" },
  { country: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  { country: "Spain", flag: "https://flagcdn.com/es.svg" },
  { country: "Luxembourg", flag: "https://flagcdn.com/lu.svg" },
  { country: "Belgium", flag: "https://flagcdn.com/be.svg" },
  { country: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { country: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
  { country: "Israel", flag: "https://flagcdn.com/il.svg" },
  { country: "Denmark", flag: "https://flagcdn.com/dk.svg" },
  { country: "Norway", flag: "https://flagcdn.com/no.svg" },
  { country: "Portugal", flag: "https://flagcdn.com/pt.svg" },
  { country: "Finland", flag: "https://flagcdn.com/fi.svg" },
  { country: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
  { country: "Italy", flag: "https://flagcdn.com/it.svg" },
  { country: "Austria", flag: "https://flagcdn.com/at.svg" },
  { country: "Poland", flag: "https://flagcdn.com/pl.svg" },
  { country: "Sweden", flag: "https://flagcdn.com/se.svg" },
  { country: "Malaysia", flag: "https://flagcdn.com/my.svg" },
  { country: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { country: "Australia", flag: "https://flagcdn.com/au.svg" },
  { country: "Russia", flag: "https://flagcdn.com/ru.svg" },
  { country: "Ireland", flag: "https://flagcdn.com/ie.svg" },
  { country: "Turkey", flag: "https://flagcdn.com/tr.svg" },
  { country: "Estonia", flag: "https://flagcdn.com/ee.svg" },
  { country: "Mexico", flag: "https://flagcdn.com/mx.svg" },
  { country: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { country: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
  { country: "South Africa", flag: "https://flagcdn.com/za.svg" },
];

const categories = [
  "R&D",
  "Responsible AI",
  "Economy",
  "Education",
  "Diversity",
  "Policy and Governance",
  "Public Opinion",
  "Infrastructure",
];

const datasetValues = [
  [70, 50, 60, 45, 40, 35, 30, 25], // United States
  [68, 48, 58, 43, 38, 34, 29, 24], // China
  [65, 46, 56, 41, 37, 33, 28, 23], // United Kingdom
  [60, 44, 54, 39, 35, 31, 27, 22], // India
  [58, 42, 52, 37, 33, 29, 26, 21], // UAE
  [55, 40, 50, 35, 31, 28, 25, 20], // France
  [53, 38, 48, 33, 30, 27, 24, 19], // South Korea
  [50, 36, 46, 31, 28, 26, 23, 18], // Germany
  [48, 35, 44, 30, 27, 25, 22, 17], // Japan
  [45, 33, 42, 28, 26, 24, 21, 16], // Singapore
  [43, 31, 40, 27, 25, 23, 20, 15], // Spain
  [42, 30, 38, 26, 24, 22, 19, 14], // Luxembourg
  [40, 28, 37, 25, 23, 21, 18, 13], // Belgium
  [38, 27, 35, 24, 22, 20, 17, 12], // Canada
  [36, 26, 33, 23, 21, 19, 16, 11], // Netherlands
  [35, 25, 32, 22, 20, 18, 15, 10], // Israel
  [33, 24, 30, 21, 19, 17, 14, 9], // Denmark
  [32, 23, 29, 20, 18, 16, 13, 8], // Norway
  [30, 22, 28, 19, 17, 15, 12, 7], // Portugal
  [29, 21, 27, 18, 16, 14, 11, 6], // Finland
  [28, 20, 26, 17, 15, 13, 10, 5], // Switzerland
  [27, 19, 25, 16, 14, 12, 9, 4], // Italy
  [26, 18, 24, 15, 13, 11, 8, 3], // Austria
  [25, 17, 23, 14, 12, 10, 7, 2], // Poland
  [24, 16, 22, 13, 11, 9, 6, 1], // Sweden
  [23, 15, 21, 12, 10, 8, 5, 1], // Malaysia
  [22, 14, 20, 11, 9, 7, 4, 0], // Saudi Arabia
  [21, 13, 19, 10, 8, 6, 3, 0], // Australia
  [20, 12, 18, 9, 7, 5, 2, 0], // Russia
  [19, 11, 17, 8, 6, 4, 1, 0], // Ireland
  [18, 10, 16, 7, 5, 3, 0, 0], // Turkey
  [17, 9, 15, 6, 4, 2, 0, 0], // Estonia
  [16, 8, 14, 5, 3, 1, 0, 0], // Mexico
  [15, 7, 13, 4, 2, 0, 0, 0], // Brazil
  [14, 6, 12, 3, 1, 0, 0, 0], // New Zealand
  [13, 5, 11, 2, 0, 0, 0, 0], // South Africa
];

const colors = [
  "#0078BB",
  "#242D50",
  "#872997",
  "#249498",
  "#ebadff",
  "#87d1e3",
  "#88d1e2",
  "#4e1f53",
];
const countriesWithFlags = countryData.map((cd) => `${cd.country}`);
const datasets = categories.map((category, index) => ({
  label: category,
  data: datasetValues.map((row, index) => row[index]),
  backgroundColor: colors[index],
  stack: "Stack 0",
}));

// // Plugin to render flags next to the country labels
// const flagPlugin = {
//   id: "flagPlugin",
//   afterDraw(chart) {
//     const { ctx, chartArea, scales } = chart;
//     const xAxis = scales.x;
//     const yAxis = scales.y;

//     countryData.forEach((country, index) => {
//       const y = yAxis.getPixelForValue(index);
//       const x = chartArea.left - 40; // Adjust position of flags

//       const image = new Image();
//       image.src = country.flag;

//       image.onload = () => {
//         ctx.drawImage(image, x, y - 10, 20, 15); // Draw flag icons
//       };
//     });
//   },
// };

// Create the chart
new Chart(ctx, lineChartConfig);
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: countryData.map((d) => d.country),
    datasets: datasets,
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        ticks: { stepSize: 10 },
        grid: {
          drawBorder: false, // Disable the y-axis border
          display: false, // Remove y-axis grid lines
        },
      },
      y: {
        stacked: true,
        grid: {
          drawBorder: false, // Disable the y-axis border
          display: false, // Remove y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
