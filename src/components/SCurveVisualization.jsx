import React from 'react';
import { Line } from 'react-chartjs-2';

const SCurveVisualization = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Planned',
        data: [1000, 2000, 3000, 4000, 5000, 6000],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Actual',
        data: [900, 1800, 2900, 3700, 4900, 5800],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">S-Curve Visualization</h2>
      <Line data={data} />
    </div>
  );
};

export default SCurveVisualization;