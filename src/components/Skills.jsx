import React from 'react';
import { Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="mb-32 pt-16 border-t border-neutral-200 scroll-mt-28">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Habilidades Técnicas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna 1 */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-neutral-900">
            <Server size={20} />
            <h3 className="font-bold text-lg">Backend & DevOps</h3>
          </div>
          <ul className="space-y-3 text-neutral-600 text-sm border-l-2 border-neutral-100 pl-4">
            <li>Java (Spring) & C#</li>
            <li>C / C++ & JavaScript</li>
            <li>Node.js & Python</li>
            <li>SQL & MongoDB</li>
            <li>Docker, K8s & Linux</li>
            <li>AWS, Azure & GCP</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-neutral-900">
            <Database size={20} />
            <h3 className="font-bold text-lg">Data & Analytics</h3>
          </div>
          <ul className="space-y-3 text-neutral-600 text-sm border-l-2 border-neutral-100 pl-4">
            <li>Python (Pandas, NumPy)</li>
            <li>SQL Avançado</li>
            <li>Power BI</li>
            <li>ETL Pipelines</li>
            <li>Modelagem de Dados</li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-neutral-900">
            <Smartphone size={20} />
            <h3 className="font-bold text-lg">Mobile & Frontend</h3>
          </div>
          <ul className="space-y-3 text-neutral-600 text-sm border-l-2 border-neutral-100 pl-4">
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