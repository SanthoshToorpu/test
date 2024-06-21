import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(Title, Tooltip, Legend);

const DoughnutChart = ({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart',
            },
        },
    };

    return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
