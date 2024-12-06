import React from 'react'
import Header from '../components/header'
import ProjectSection from '../components/project-section'
import AISection from '../components/ai-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0FF]">
      <Header />
      <main>
        <ProjectSection />
        <AISection />
      </main>
    </div>
  )
}

