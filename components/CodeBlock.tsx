
import React, { useState, useMemo } from 'react';

interface CodeBlockProps {
  code: string;
}

const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 4.625v2.625a2.625 2.625 0 11-5.25 0v-2.625m0-8.625v-1.125a2.625 2.625 0 015.25 0v1.125" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const highlightJavaCode = (code: string): string => {
    // Escape basic HTML characters to prevent XSS and render them correctly.
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const keywords = ['public', 'class', 'static', 'void', 'if', 'else', 'new', 'extends', 'super', 'return', 'final', 'int', 'boolean'];
    const classes = ['String', 'System', 'Animal', 'Dog', 'SuperKeywordExample', 'KeywordsExample', 'FinalClass', 'NestedIfExample'];

    // Define patterns for different token types. Order is important.
    const patterns = [
      `(?<comment>\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/)`, // Comments
      `(?<string>".*?")`,                           // Strings
      `(?<annotation>@\\w+)`,                       // Annotations
      `(?<keyword>\\b(${keywords.join('|')})\\b)`,  // Keywords
      `(?<class>\\b(${classes.join('|')})\\b)`,     // Class names
      `(?<number>\\b\\d+\\b)`,                       // Numbers
    ];

    const combinedRegex = new RegExp(patterns.join('|'), 'g');

    let highlightedCode = escapedCode.replace(combinedRegex, (match, ...args) => {
        const groups = args[args.length - 1];
        if (groups.comment) return `<span class="text-slate-500">${groups.comment}</span>`;
        if (groups.string) return `<span class="text-emerald-400">${groups.string}</span>`;
        if (groups.annotation) return `<span class="text-pink-400">${groups.annotation}</span>`;
        if (groups.keyword) return `<span class="text-cyan-400">${groups.keyword}</span>`;
        if (groups.class) return `<span class="text-yellow-300">${groups.class}</span>`;
        if (groups.number) return `<span class="text-purple-400">${groups.number}</span>`;
        return match;
    });

    // Handle method calls separately as a final step. This is safer now.
    highlightedCode = highlightedCode.replace(/(\.)(\w+)/g, '$1<span class="text-sky-300">$2</span>');
    
    return highlightedCode;
};


export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const highlightedCode = useMemo(() => highlightJavaCode(code), [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="mt-6 relative group">
      <pre className="bg-slate-950/70 text-sm text-slate-300 rounded-lg p-5 overflow-x-auto border border-slate-700">
        <code
          className="font-mono"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 p-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 ${
            isCopied
            ? 'bg-green-500 text-white'
            : 'bg-slate-700 text-slate-300 opacity-0 group-hover:opacity-100 hover:bg-slate-600'
        }`}
        aria-label="Copy code"
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};
