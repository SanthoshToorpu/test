import React, { useEffect, useState } from 'react';
import LineChart from './components/Linechart';
import BarChart from './components/BarChart';
import axios from 'axios';
import PieChart from './components/PieChart';
import { Doughnut } from 'react-chartjs-2';
import ScatterChart from './components/Scatter';

const App = () => {
  const [response, setResponse] = useState([]);
  const [response1, setResponse1] = useState([]);
  const [randomColors, setRandomColors] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((res) => {
          const responseData = res.data.data.map(item => ({
            label: item.Year,
            population: item.Population
          }));

          console.log(responseData);

          const nationLabels = responseData.map(item => item.label);
          const populationData = responseData.map(item => item.population);

          setResponse(populationData);
          setLabels(nationLabels);

        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
    };

    const colors = Array(labels.length).fill().map(getRandomColor);
    setRandomColors(colors);

    fetchData();


  }, []);
  


const chartData = {
    labels: labels,
    datasets: [
        {
            label: 'Population',
            data: response,
            backgroundColor: randomColors, // Use pre-generated random colors
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }
    ]
};

  return (
    <div>
      <h1>Line chart</h1>
      <LineChart chartData={chartData} /> 
      <h1>Bar chart</h1>
      <BarChart chartData={chartData} />
      <h1>Pie Chatr</h1>
      <PieChart chartData={chartData} />
      <h1>DoughNut</h1>
      <Doughnut data={chartData} />
      <h1>Scatter Plot</h1>
      <ScatterChart chartData={chartData} />      
    </div>
  )
}

export default App;
