import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  bg?: 'white' | 'gray'
}

export default function SectionWrapper({ 
  children, 
  className = '',
  bg = 'white' 
}: SectionWrapperProps) {
  const background = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  }

  return (
    <section className={`py-16 ${background[bg]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}