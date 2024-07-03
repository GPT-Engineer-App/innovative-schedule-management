import ThreeDVisualization from '../components/ThreeDVisualization';
import BudgetProgressChart from '../components/BudgetProgressChart';
import SCurveChart from '../components/SCurveChart';
import GanttChart from '../components/GanttChart';
import { useState } from 'react';

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à SIGO!</h1>
      <h2 className="text-2xl mb-4">Soluções Inovadoras para Gestão de Cronogramas de Obras</h2>
      <p className="text-lg mb-4">Descubra como nossas estratégias podem transformar a gestão de cronogramas, reduzindo erros e atrasos em seus projetos de construção.</p>
      <div className="relative">
        <img
          src="/images/building.jpg"
          alt="Building"
          className={`w-full h-auto ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/management-charts.png"
            alt="Management Charts"
            className="w-1/2 h-auto"
          />
        </div>
      </div>
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

export default Index;