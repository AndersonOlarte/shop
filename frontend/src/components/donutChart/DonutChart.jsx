import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './donutChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);



export function DonutChart({typeOptions}) {

    const categoryKeys = Object.keys(typeOptions);
    const categoryValues = Object.values(typeOptions);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Categories',
          },
        },
      };

    const data = {
      labels:categoryKeys,
      datasets: [
        {
          label: '# of Votes',
          data: categoryValues,
          backgroundColor: [
            'rgba(15, 161, 15, 0.911)',
            'rgba(176, 255, 189, 0.911)',
            'rgba(176, 235, 176, 0.911)',
          ],
          borderColor: [
            'rgba(15, 161, 15, 0.911)',
            'rgba(15, 161, 90, 0.911)',
            'rgba(176, 255, 176, 0.911)',
          ],
          borderWidth: 1,
        },
      ],
    };



  return (
    <>
        <div className="container donutContainer">
            <Doughnut data={data} options={options} />
        </div>
    </>
  );
}
