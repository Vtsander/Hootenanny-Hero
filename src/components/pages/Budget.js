import React, { useState } from 'react';
import { PieController, LinearScale, Element, TimeScale, Tooltip } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
import { ReactChart } from 'chartjs-react';

// Register modules,
// this example for time scale and linear scale
ReactChart.register(PieController, LinearScale, Element, TimeScale, Tooltip);

// options of chart similar to v2 with a few changes
// https://www.chartjs.org/docs/next/getting-started/v3-migration/
const chartOption = {
    responsive: true,
    scales: {
        x: {
          type: 'time',
          adapters: {
            date: enUS,
          },
        },
        y: {
          type: 'linear',
        },
      },
    };

// data of chart similar to v2, check the migration guide
const initialChartData = {
    labels: ['Floral', 'Catering', 'Decor'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['Floral', 'Catering', 'Decor'],
      },
    ],
  };

const PieChart = () => {
const [chartData, setChartData] = useState(initialChartData);

const handleCheckboxChange = (index) => {
    const newChartData = { ...chartData };
    newChartData.datasets[0].data[index] = newChartData.datasets[0].data[index] === 0 ? 1 : 0;
    setChartData(newChartData);
};

return (
    <>
    <div>
        <input type="checkbox" onChange={() => handleCheckboxChange(0)} />
        <label>Floral</label>
    </div>
    <div>
        <input type="checkbox" onChange={() => handleCheckboxChange(1)} />
        <label>Catering</label>
    </div>
    <div>
        <input type="checkbox" onChange={() => handleCheckboxChange(2)} />
        <label>Decor</label>
    </div>
    <ReactChart type="piechart" data={chartData} options={chartOption} />
    </>
);
};
  
export default PieChart;