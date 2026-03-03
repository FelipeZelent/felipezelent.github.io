import React from 'react';
import { Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 border-t border-neutral-200">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Habilidades Técnicas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8 text-neutral-900">
            <Server size={28} />
            <h3 className="font-bold text-2x1">Backend & DevOps</h3>
          </div>
          <ul className="space-y-4 text-neutral-600 text-sm border-l-2 border-neutral-200 pl-5">
            <li>Java (Spring) & C#</li>
            <li>C / C++ & JavaScript</li>
            <li>Node.js & Python</li>
            <li>SQL & MongoDB</li>
            <li>Docker, K8s & Linux</li>
            <li>AWS, Azure & GCP</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 text-neutral-900">
            <Database size={28} />
            <h3 className="font-bold text-2xl">Data & Analytics</h3>
          </div>
          <ul className="space-y-4 text-neutral-600 text-sm border-l-2 border-neutral-200 pl-5">
            <li>Python (Pandas, NumPy)</li>
            <li>SQL Avançado</li>
            <li>Power BI</li>
            <li>ETL Pipelines</li>
            <li>Modelagem de Dados</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 text-neutral-900">
            <Smartphone size={28} />
            <h3 className="font-bold text-2xl">Mobile & Frontend</h3>
          </div>
          <ul className="space-y-4 text-neutral-600 text-sm border-l-2 border-neutral-200 pl-5">
            <li>React Native, Flutter & Kotlin</li>
            <li>React.js & Angular</li>
            <li>Dart & TypeScript</li>
            <li>Firebase & Google Cloud</li>
            <li>Figma (Prototipagem)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;