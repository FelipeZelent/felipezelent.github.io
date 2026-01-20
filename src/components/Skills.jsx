import React from 'react';
import { Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
    return (
        <section className="mb-32 border-t border-neutral-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-6 text-neutral-900">
                        <Server size={20} />
                        <h3 className="font-bold text-lg">Backend & DevOps</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-600 text-sm">
                        <li>Java(SpringBoot) & C#</li>
                        <li>C / C++ & JavaScript</li>
                        <li>SQL & MongoDB</li>
                        <li>Docker, K8s & Linux</li>
                        <li>AWS, Azure & GCP</li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-6 text-neutral-900">
                        <Database size={20} />
                        <h3 className="font-bold text-lg">Data & Analytics</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-600 text-sm">
                        <li>Python (Pandas, NumPy)</li>
                        <li>Power BI</li>
                        <li>ETL Pipelines</li>
                        <li>Modelagem de Dados</li>                    
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-6 text-neutral-900">
                        <Database size={20} />
                        <h3 className="font-bold text-lg">Mobile & Frontend</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-600 text-sm">
                        <li>React Native, Flutter & Kotlin</li>
                        <li>React.js & Angular</li>
                        <li>Dart & TypeScript</li>
                        <li>Firebase & Google Cloud</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;