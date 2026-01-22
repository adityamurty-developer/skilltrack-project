// BAR CHART
const barCtx = document.getElementById("barChart");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: [
      "AI & ML",
      "Cloud Computing",
      "Cybersecurity",
      "Data Science",
      "Full Stack",
      "Digital Marketing"
    ],
    datasets: [{
      label: "Demand %",
      data: [80, 75, 65, 65, 60, 55],
      backgroundColor: [
        "#2e6aff",
        "#4fa3ff",
        "#4db6ac",
        "#81c784",
        "#ffd54f",
        "#ffb74d"
      ],
      borderRadius: 12
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + "%"
        }
      }
    }
  }
});

// LINE CHART
const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["2021", "2022", "2023", "2024", "2026"],
    datasets: [
      {
        label: "AI & ML",
        data: [55, 63, 68, 72, 78],
        borderColor: "#2e6aff",
        tension: 0.4
      },
      {
        label: "Cloud Computing",
        data: [50, 55, 59, 63, 67],
        borderColor: "#4fa3ff",
        tension: 0.4
      },
      {
        label: "Cybersecurity",
        data: [42, 47, 51, 55, 60],
        borderColor: "#4db6ac",
        tension: 0.4
      },
      {
        label: "Data Science",
        data: [38, 43, 48, 53, 57],
        borderColor: "#81c784",
        tension: 0.4
      },
      {
        label: "Full Stack",
        data: [30, 36, 41, 46, 51],
        borderColor: "#ffd54f",
        tension: 0.4
      },
      {
        label: "Digital Marketing",
        data: [22, 28, 33, 37, 42],
        borderColor: "#ffb74d",
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right"
      }
    }
  }
});