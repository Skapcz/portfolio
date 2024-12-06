import React from 'react'
import { Brain } from 'lucide-react'
import { Button } from './ui/button'

export default function AISection() {
  return (
    <section className="my-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Brain className="text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-indigo-800">Programování s AI</h2>
      </div>
      <p className="text-gray-700">
        Umělá inteligence revolucionizuje způsob, jakým vyvíjíme software. S pomocí AI můžeme rychleji psát kód,
        odhalovat chyby a optimalizovat výkon našich aplikací. Nástroje jako GPT-4 nám pomáhají s generováním kódu,
        debugováním a dokonce i s návrhem architektury. Budoucnost programování je zde a AI je její nedílnou součástí.
      </p>
    </section>
  )
}

