import React from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';

const GanttChart = () => {
  const tasks = [
    {
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 7)),
      name: 'Task 1',
      id: '1',
      type: 'task',
      progress: 45,
      isDisabled: false,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(new Date().setDate(new Date().getDate() + 8)),
      end: new Date(new Date().setDate(new Date().getDate() + 14)),
      name: 'Task 2',
      id: '2',
      type: 'task',
      progress: 25,
      isDisabled: false,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
  ];

  return <Gantt tasks={tasks} viewMode={ViewMode.Day} />;
};

export default GanttChart;