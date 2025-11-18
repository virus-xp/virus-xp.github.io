import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import type { QAItem } from '../constants';

interface QuestionAccordionProps extends QAItem {
    defaultOpen?: boolean;
}

const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const MinusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ question, theory, code, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-cyan-500/20">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center text-left p-5 sm:p-6 bg-slate-800 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
                <h2 className="text-lg sm:text-xl font-semibold text-cyan-400">{question}</h2>
                <div className="text-cyan-400 flex-shrink-0 ml-4">
                    {isOpen ? <MinusIcon className="w-6 h-6 transition-transform duration-300"/> : <PlusIcon className="w-6 h-6 transition-transform duration-300"/>}
                </div>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 border-t border-slate-700">
                        <div
                            className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100 prose-strong:text-slate-100 prose-code:text-emerald-400 prose-code:before:content-none prose-code:after:content-none prose-code:bg-slate-700 prose-code:rounded-md prose-code:px-1.5 prose-code:py-1 prose-code:font-mono prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-2"
                            dangerouslySetInnerHTML={{ __html: theory }}
                        />
                        {code && <CodeBlock code={code} />}
                    </div>
                </div>
            </div>
        </div>
    );
};