import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Stylish Bar Chart',
                color: '#333',
                font: {
                    size: 20,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#333',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    color: '#333',
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
    };

    return (
        <div className="w-4/5 h-3/5 bg-white p-6 rounded-lg shadow-lg mx-auto">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
