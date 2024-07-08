import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import moment from "moment";
export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
const Graph = ({ transactions }) => {
  const chartRef = useRef(null); // Reference to the chart canvas

  useEffect(() => {
    if (!chartRef.current || !transactions) return;

    // Initialize empty object to store income and expense totals by month
    const incomeExpenseData = {};

    // Loop through each transaction to categorize by month
    transactions.forEach((transaction) => {
      const { amount, type, date } = transaction;
      const month = moment(date).format("MMMM YYYY"); // Format date to month and year

      // Ensure month key exists in incomeExpenseData
      if (!incomeExpenseData[month]) {
        incomeExpenseData[month] = { income: 0, expense: 0 };
      }

      // Categorize transaction amount based on type (income or expense)
      if (type === "income") {
        incomeExpenseData[month].income += amount;
      } else if (type === "expense") {
        incomeExpenseData[month].expense += amount;
      }
    });

    // Prepare data for Chart.js
    const labels = Object.keys(incomeExpenseData);
    const incomes = labels.map((month) => incomeExpenseData[month].income);
    const expenses = labels.map((month) => incomeExpenseData[month].expense);

    // Data object for Chart.js
    const data = {
      labels: labels, // Use the formatted month labels
      datasets: [
        {
          label: "Income",
          data: incomes,
          borderColor: "rgba(209, 8, 45, 1)",
          backgroundColor: "rgba(250, 147, 175, 0.2)",
          fill: true,
        },
        {
          label: "Expenses",
          data: expenses,
          borderColor: "rgba(13, 110, 253, 1)",
          backgroundColor: "rgba(150, 193, 255, 0.2)",
          fill: true,
        },
      ],
    };

    // Chart.js options configuration
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Balance statistics",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Month",
          },
        },
        y: {
          title: {
            display: true,
            text: "Amount",
          },
          ticks: {
            suggestedMin: 0, // Adjust the minimum value as needed
            // You can optionally set a maximum value like suggestedMax: 1500,
          },
        },
      },
    };

    // Destroy any existing chart to prevent canvas re-use error
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create new Chart instance with config object
    chartRef.current.chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: options,
    });

    // Clean up: Destroy chart on component unmount
    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [transactions]);

  return (
    <div className="h-96 mt-16 mx-2">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
