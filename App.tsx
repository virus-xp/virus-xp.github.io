
import React from 'react';
import { QA_DATA } from './constants';
import { QuestionAccordion } from './components/QuestionAccordion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 border-b-2 border-slate-700 pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Java Assignment Q&A
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Detailed answers for key Java concepts.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Note: Exempted for students who delivered presentations.
          </p>
        </header>

        <main className="space-y-6">
          {QA_DATA.map((item, index) => (
            <QuestionAccordion
              key={item.id}
              id={item.id}
              question={item.question}
              theory={item.theory}
              code={item.code}
              defaultOpen={index === 0}
            />
          ))}
        </main>

        <footer className="text-center mt-12 py-6 border-t-2 border-slate-700">
            <p className="text-slate-500">Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
