import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {monthlyVal} from './GenerateData'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Expenditure v/s Earning',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Expenditure',
      data: monthlyVal.expenditure,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Earning',
      data: monthlyVal.earning,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
