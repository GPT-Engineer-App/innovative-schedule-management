import ThreeDVisualization from '../components/ThreeDVisualization';
import BudgetProgressChart from '../components/BudgetProgressChart';
import SCurveChart from '../components/SCurveChart';
import GanttChart from '../components/GanttChart';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à SIGO!</h1>
      <h2 className="text-2xl mb-4">Soluções Inovadoras para Gestão de Cronogramas de Obras</h2>
      <p className="text-lg mb-4">Descubra como nossas estratégias podem transformar a gestão de cronogramas, reduzindo erros e atrasos em seus projetos de construção.</p>
      <ThreeDVisualization />
      <h2 className="text-2xl font-semibold mb-4">Visualização de Andamentos de Orçamentos</h2>
      <BudgetProgressChart />
      <h2 className="text-2xl font-semibold mb-4">Visualização de Curva S</h2>
      <SCurveChart />
      <h2 className="text-2xl font-semibold mb-4">Visualização de Cronogramas no Formato Gantt</h2>
      <GanttChart />
    </div>
  );
};

export default Index;