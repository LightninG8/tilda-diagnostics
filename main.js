(() => {
  // Рисование диаграмы
  const ctx = document.getElementById("result-canvas");

  const data = {
    labels: [
      "Мышление",
      ["Бизнес-", "модель"],
      ["Команда", "и управление"],
      "Продажи",
      "Маркетинг",
    ],
    datasets: [
      {
        label: "Результаты",
        data: [4, 3, 2, 1, 2],
        fill: true,
        radius:  window.innerWidth < 960 ? 0: 6,
        color: "red",
        backgroundColor: "rgba(15, 28, 107, 0.45)",
        borderColor: "#1226A1",
        pointBackgroundColor: "#1226A1",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#1226A1",
        pointHoverRadius: window.innerWidth < 960 ? 0: 6,
      },
    ],
  };

  const config = {
    type: "radar",
    data: data,
    options: {
      layout: {
        padding: 10,
      },

      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 2,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            display: false,
          },
          pointLabels: {
            font: {
              size: window.innerWidth < 960 ? 10 : 18,
            },
            color: "#1226A1",
            autoSkip: false,
            maxRotation: 0,
            
          },
        },
      },
    },
  };

  const chart = new Chart(ctx, config);
})();
