'use client'

import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronDown } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Projekt 1',
    description: 'Popis prvního projektu'
  },
  {
    id: 2,
    name: 'Projekt 2',
    description: 'Popis druhého projektu'
  }
]

export default function ProjectSection() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({})

  const toggleOpen = (id: number) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="p-4">
      <h2 className="text-[#4834D4] text-2xl font-bold mb-4">Moje Projekty</h2>
      <div className="space-y-4">
        {projects.map(project => (
          <Collapsible key={project.id} open={openStates[project.id]} onOpenChange={() => toggleOpen(project.id)}>
            <div className="bg-white rounded-lg shadow">
              <CollapsibleTrigger className="w-full">
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-[#4834D4] font-medium">{project.name}</h3>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openStates[project.id] ? 'rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4 text-gray-600">
                  {project.description}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

