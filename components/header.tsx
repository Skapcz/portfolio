import React from 'react'
import { Briefcase, Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Moje Portfolio</h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

