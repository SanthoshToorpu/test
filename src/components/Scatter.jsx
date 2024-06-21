import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

const ScatterChart = ({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Scatter Chart',
            },
        },
    };

    return <Scatter data={chartData} options={options} height={400} width={600} />;
};

export default ScatterChart;
