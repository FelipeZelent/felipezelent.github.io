import React from 'react';
import { Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 border-t border-white/10">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-16 uppercase">Habilidades</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0a0a0a] p-10 border border-white/10 rounded-3xl hover:border-white/20 transition-colors">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl text-white"><Server size={24} /></div>
            <h3 className="font-bold text-xl text-white">Backend</h3>
          </div>
          <ul className="space-y-4 text-slate-400 text-sm font-mono">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Java (Spring) & C#</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> C / C++ & JS</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Docker & K8s</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> AWS & Azure</li>
          </ul>
        </div>

        <div className="bg-[#0a0a0a] p-10 border border-white/10 rounded-3xl hover:border-white/20 transition-colors">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl text-white"><Database size={24} /></div>
            <h3 className="font-bold text-xl text-white">Data</h3>
          </div>
          <ul className="space-y-4 text-slate-400 text-sm font-mono">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Python (Pandas)</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> SQL</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> PostgreSQL</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> ETL Pipelines</li>
          </ul>
        </div>

        <div className="bg-[#0a0a0a] p-10 border border-white/10 rounded-3xl hover:border-white/20 transition-colors">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl text-white"><Smartphone size={24} /></div>
            <h3 className="font-bold text-xl text-white">Mobile</h3>
          </div>
          <ul className="space-y-4 text-slate-400 text-sm font-mono">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Flutter & Dart</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> React Native</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Firebase</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;