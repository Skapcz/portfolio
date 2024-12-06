'use client'

import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'AI Chat Assistant',
    description: 'Inteligentní chatovací asistent postavený na GPT-4 s podporou různých jazyků a kontextového učení.',
    url: 'https://example.com/project1',
    github: 'https://github.com/yourusername/project1',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'TailwindCSS']
  },
  {
    id: 2,
    name: 'Portfolio Web',
    description: 'Moderní portfolio web vytvořený pomocí Next.js a TailwindCSS s důrazem na uživatelskou zkušenost.',
    url: 'https://example.com/project2',
    github: 'https://github.com/yourusername/project2',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript']
  }
]

export default function ProjectSection() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({})

  const toggleOpen = (id: number) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-indigo-800 text-center">Moje Projekty</h2>
      <div className="space-y-6">
        {projects.map(project => (
          <Collapsible key={project.id} open={openStates[project.id]} onOpenChange={() => toggleOpen(project.id)}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-indigo-600">{project.name}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-indigo-600">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-indigo-600">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        {openStates[project.id] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <CollapsibleContent>
                  <div className="mt-6 border rounded-lg overflow-hidden bg-gray-50">
                    <iframe src={project.url} className="w-full h-96" title={project.name} />
                  </div>
                </CollapsibleContent>
              </div>
            </div>
          </Collapsible>
        ))}
      </div>
    </section>
  )
}

