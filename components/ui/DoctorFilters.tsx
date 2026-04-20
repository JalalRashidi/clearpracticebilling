'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const specialties = [
  'All Specialties',
  'Cardiologist',
  'Dentist',
  'Dermatologist',
  'Neurologist',
  'Orthopedic',
  'Pediatrician',
  'Psychiatrist'
]

const experiences = [
  'Any Experience',
  '0-5 years',
  '5-10 years',
  '10-15 years',
  '15+ years'
]

const FilterSection = ({ title, children, defaultOpen = true }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-slate-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-slate-900 mb-3"
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && children}
    </div>
  )
}

const DoctorFilters = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')
  const [selectedExperience, setSelectedExperience] = useState('Any Experience')

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-slate-900">Filters</h3>
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
          Clear All
        </button>
      </div>

      <FilterSection title="Specialty">
        <div className="space-y-2">
          {specialties.map((specialty) => (
            <label key={specialty} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="specialty"
                checked={selectedSpecialty === specialty}
                onChange={() => setSelectedSpecialty(specialty)}
                className="w-4 h-4 text-teal-600 border-slate-300 focus:ring-teal-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                {specialty}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Experience">
        <div className="space-y-2">
          {experiences.map((exp) => (
            <label key={exp} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="experience"
                checked={selectedExperience === exp}
                onChange={() => setSelectedExperience(exp)}
                className="w-4 h-4 text-teal-600 border-slate-300 focus:ring-teal-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                {exp}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md shadow-teal-600/20">
        Apply Filters
      </button>
    </div>
  )
}

export default DoctorFilters
