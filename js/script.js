const form = document.getElementById("sequence-form");
const result = document.getElementById("result");

const ctx = document.getElementById("probability-chart").getContext("2d");
const labels = ["Cytosolic", "Extracellular/Secreted", "Nuclear", "Mitochondrial"];
const chartData = {
    labels: labels,
    datasets: [
        {
            label: "Probability",
            data: [0, 0, 0, 0],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const probabilityChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: chartOptions,
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const sequence = document.getElementById("sequence").value;
    const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ sequence }),
    });

    const data = await response.json();
    const probabilities = data.probabilities;

    probabilityChart.data.datasets[0].data = probabilities;
    probabilityChart.update();

    result.style.display = "block";
});
