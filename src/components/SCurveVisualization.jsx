import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const SCurveVisualization = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Planned',
            data: [20, 40, 60, 80, 100, 120, 140],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
          {
            label: 'Actual',
            data: [15, 35, 55, 75, 95, 115, 135],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default SCurveVisualization;