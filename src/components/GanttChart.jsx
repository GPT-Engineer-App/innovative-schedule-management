import React, { useEffect, useRef } from 'react';
import Gantt from 'frappe-gantt';

const GanttChart = () => {
  const ganttRef = useRef(null);

  useEffect(() => {
    const tasks = [
      {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2023-09-01',
        end: '2023-09-15',
        progress: 20,
      },
      {
        id: 'Task 2',
        name: 'Develop new feature',
        start: '2023-09-16',
        end: '2023-09-30',
        progress: 50,
      },
    ];

    new Gantt(ganttRef.current, tasks, {
      view_mode: 'Day',
    });
  }, []);

  return <div ref={ganttRef} />;
};

export default GanttChart;