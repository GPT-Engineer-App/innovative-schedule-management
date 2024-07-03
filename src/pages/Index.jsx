import React from 'react';
import ThreeDVisualization from '../components/ThreeDVisualization';
import BudgetTracking from '../components/BudgetTracking';
import SCurveVisualization from '../components/SCurveVisualization';
import GanttChart from '../components/GanttChart';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à SIGO!</h1>
      <h2 className="text-2xl mb-4">Soluções Inovadoras para Gestão de Cronogramas de Obras</h2>
      <p className="text-lg mb-4">Descubra como nossas estratégias podem transformar a gestão de cronogramas, reduzindo erros e atrasos em seus projetos de construção.</p>
      <ThreeDVisualization />
      <BudgetTracking />
      <SCurveVisualization />
      <GanttChart />
    </div>
  );
};

export default Index;