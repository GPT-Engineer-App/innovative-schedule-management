import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetTracking = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Budget',
        data: [3000, 2000, 4000, 5000, 6000, 7000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Actual',
        data: [2800, 2200, 3900, 4800, 6200, 6800],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Budget Tracking</h2>
      <Bar data={data} />
    </div>
  );
};

export default BudgetTracking;