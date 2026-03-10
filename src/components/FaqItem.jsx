import { useState } from 'react';

export default function FaqItem({ question, answer, tip, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenTicket = () => {
    // Se houver um link personalizado, usa ele; caso contrário, usa um padrão
    const destination = link || 'https://sos.aguiabranca.com.br';
    window.open(destination, '_blank');
  };

  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-[15px] pr-4">{question}</span>
        <span className="text-xl text-gray-400">{isOpen ? '-' : '+'}</span>
      </button>

      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in-down">
          <p>{answer}</p>

          {tip && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs text-gray-600 italic">
                <strong>Dica:</strong> {tip}
              </p>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleOpenTicket}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-xs font-bold transition-all shadow-sm"
            >
              Abrir Chamado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}