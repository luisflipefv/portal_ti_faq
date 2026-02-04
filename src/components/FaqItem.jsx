import { useState } from 'react';

export default function FaqItem({ question, answer, tip }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600 animate-fade-in-down">
          {answer}
          {tip && <p className="mt-2 text-sm text-gray-500 italic">{tip}</p>}
        </div>
      )}
    </div>
  );
}