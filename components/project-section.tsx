'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Projekt 1',
    description: 'Popis prvního projektu',
    url: 'https://example.com/project1'
  },
  {
    id: 2,
    name: 'Projekt 2',
    description: 'Popis druhého projektu',
    url: 'https://example.com/project2'
  }
]

export default function ProjectSection() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({})

  const toggleOpen = (id: number) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Moje Projekty</h2>
      <div className="space-y-4">
        {projects.map(project => (
          <Collapsible key={project.id} open={openStates[project.id]} onOpenChange={() => toggleOpen(project.id)}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-indigo-600">{project.name}</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {openStates[project.id] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <CollapsibleContent>
                <div className="mt-4 border rounded-lg overflow-hidden">
                  <iframe src={project.url} className="w-full h-96" title={project.name} />
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </section>
  )
}

