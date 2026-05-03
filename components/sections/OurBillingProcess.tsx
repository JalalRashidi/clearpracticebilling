'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FileText, Send, BarChart3, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    title: "Accurate Documentation Intake",
    tag: "Phase 01",
    description:
      "We work closely with practices to collect and verify patient demographics, insurance information, and encounter data. Accurate intake helps prevent avoidable billing errors and delays.",
    icon: FileText,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Efficient Claim Submission",
    tag: "Phase 02",
    description:
      "Claims are submitted promptly and accurately using advanced scrubbers, supporting faster payer review and significantly shorter payment timelines.",
    icon: Send,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Transparent Reporting & Communication",
    tag: "Phase 03",
    description:
      "Practices receive clear visibility into claim status, payments, and outstanding balances. Our team remains available to address questions and provide updates.",
    icon: BarChart3,
    color: "from-blue-600 to-violet-600",
  },
]

export default function OurBillingProcess() {
  const containerRef = useRef(null)
  
  // Create a scroll progress tracker for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="relative mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-4">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              A Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Billing Lifecycle</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              We’ve engineered a process that eliminates friction, maximizes clean claims, and provides 100% transparency into your revenue cycle.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1

              return (
                <div key={index} className="relative">
                  {/* Step Connector Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-blue-200 flex items-center justify-center text-white ring-8 ring-white`}
                    >
                      <Icon size={22} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="md:w-[45%] ml-20 md:ml-0"
                    >
                      <div className="group relative p-8 bg-white rounded-3xl border border-blue-100 shadow-xl shadow-slate-200/40 hover:border-blue-200 transition-all duration-300">
                        {/* Phase Indicator */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">{step.tag}</span>
                            <div className="h-px w-8 bg-blue-100" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-slate-500 leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-2 text-slate-400 font-medium text-sm italic">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            Verified Process
                        </div>

                        {/* Large Background Number */}
                        <span className="absolute -top-4 -right-2 text-8xl font-black text-slate-50 pointer-events-none select-none z-[-1] group-hover:text-blue-50/50 transition-colors">
                            0{index + 1}
                        </span>
                      </div>
                    </motion.div>

                    {/* Desktop Decorative Spacer */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link href="/contact" className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
            Get Started With Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}