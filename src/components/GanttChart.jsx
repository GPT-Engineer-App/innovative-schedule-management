import React, { useEffect, useRef } from 'react';
import Gantt from 'frappe-gantt';

const GanttChart = () => {
  const ganttRef = useRef(null);

  useEffect(() => {
    const tasks = [
      {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2023-01-01',
        end: '2023-01-15',
        progress: 20,
      },
      {
        id: 'Task 2',
        name: 'Develop new feature',
        start: '2023-01-16',
        end: '2023-02-01',
        progress: 50,
      },
      {
        id: 'Task 3',
        name: 'Testing and QA',
        start: '2023-02-02',
        end: '2023-02-15',
        progress: 80,
      },
    ];

    new Gantt(ganttRef.current, tasks, {
      view_mode: 'Day',
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gantt Chart</h2>
      <div ref={ganttRef} />
    </div>
  );
};

export default GanttChart;