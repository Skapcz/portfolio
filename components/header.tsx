import React from 'react'
import { LayoutDashboard } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-[#6C5CE7] text-white py-4 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <LayoutDashboard className="h-6 w-6" />
        <h1 className="text-xl font-medium">Moje Portfolio</h1>
      </div>
      <button className="bg-black/20 px-3 py-1 rounded text-sm">
        Fullscreen
      </button>
    </header>
  )
}

