import { useState, useMemo } from 'react'
import { questions } from './data/questions'
import FaqItem from './components/FaqItem'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portal de Apoio ao Usuário</h1>
          <p className="text-gray-600">Tire suas dúvidas rápidas antes de abrir um chamado.</p>
        </header>

        <div className="mb-8">
          <input
            type="text"
            placeholder="O que está acontecendo? (ex: VPN, Chamado, Senha)"
            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} tip={item.tip} />
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Nenhum resultado encontrado para "{searchTerm}".</p>
          )}
        </div>

        <footer className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">Não encontrou o que precisava?</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium" onClick={() => window.open('https://www.aguiabranca.com.br/telefones', '_blank')}>
            Abrir Chamado Agora
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App