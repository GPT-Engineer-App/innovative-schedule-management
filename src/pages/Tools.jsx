import ThreeDVisualization from '../components/ThreeDVisualization';
import BudgetProgressChart from '../components/BudgetProgressChart';
import SCurveChart from '../components/SCurveChart';
import GanttChart from '../components/GanttChart';

const Tools = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Ferramentas</h1>
      <ThreeDVisualization />
      <h2 className="text-2xl font-semibold mb-4">Progresso do Orçamento</h2>
      <BudgetProgressChart />
      <h2 className="text-2xl font-semibold mb-4">Curva S</h2>
      <SCurveChart />
      <h2 className="text-2xl font-semibold mb-4">Cronograma Gantt</h2>
      <GanttChart />
    </div>
  );
};

export default Tools;