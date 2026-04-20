'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Plus, ChevronRight } from 'lucide-react';
const specialties = [
  "Anesthesiology", "Cardiology", "Dermatology", "Podiatry", "Endocrinology", 
  "ENT", "Family Medicine", "Rheumatology", "Gastroenterology", "Hospitalists", 
  "OB/GYN", "Pulmonology", "Nephrology", "Neurology", "Pain Medicine", 
  "Sleep Management", "Ophthalmology", "Optometry", "Pediatrics", "Radiology", 
  "Internal Medicine", "Mental Health", "Orthopedic", "Physical Therapy", 
  "Psychiatrist", "Urology", "Occupational Therapy"
];

const SpecialtiesSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 12 initially to reduce cognitive load
  const visibleSpecialties = isExpanded ? specialties : specialties.slice(0, 11);

  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Stethoscope size={16} />
              <span>Medical Expertise</span>
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialties We Support
            </h3>
            <p className="mt-2 text-slate-500 max-w-lg">
              Our billing and coding solutions are tailored to the unique regulatory and clinical requirements of these medical fields.
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <motion.ul 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleSpecialties.map((specialty) => (
              <motion.li 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={specialty}
                className="group relative p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                    {specialty}
                  </span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* Improved Toggle Action */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all active:scale-95"
          >
            {isExpanded ? "Show Less" : "View All 27+ Specialties"}
            {!isExpanded && <Plus size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;