import React from 'react'
import { Brain } from 'lucide-react'

export default function AISection() {
  return (
    <div className="p-4 bg-white rounded-lg shadow mx-4">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-5 w-5 text-[#4834D4]" />
        <h2 className="text-[#4834D4] font-medium">Programování s AI</h2>
      </div>
      <p className="text-gray-600">
        Umělá inteligence revolucionizuje způsob, jakým vyvíjíme software. S pomocí AI můžeme rychleji psát kód,
        odhalovat chyby a optimalizovat výkon našich aplikací.
      </p>
    </div>
  )
}

