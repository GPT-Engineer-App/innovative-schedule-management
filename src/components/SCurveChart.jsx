import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SCurveChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
          {
            label: 'Planned Progress',
            data: [10, 20, 30, 50, 70, 85, 100],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1,
          },
          {
            label: 'Actual Progress',
            data: [5, 15, 25, 45, 65, 80, 95],
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

export default SCurveChart;