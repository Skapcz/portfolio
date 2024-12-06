import React from 'react'
import { Brain, Code, Cpu, GitBranch } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Generování Kódu',
    description: 'Automatické generování kódu s využitím nejmodernějších AI modelů'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Optimalizace',
    description: 'Inteligentní optimalizace výkonu a čistoty kódu'
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: 'Verzování',
    description: 'Chytré správa verzí a automatické řešení konfliktů'
  }
]

export default function AISection() {
  return (
    <section className="my-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-center mb-8">
        <Brain className="text-indigo-600 h-10 w-10 mr-4" />
        <h2 className="text-3xl font-bold text-indigo-800">Programování s AI</h2>
      </div>
      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
        Umělá inteligence revolucionizuje způsob, jakým vyvíjíme software. S pomocí AI můžeme rychleji psát kód,
        odhalovat chyby a optimalizovat výkon našich aplikací.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

