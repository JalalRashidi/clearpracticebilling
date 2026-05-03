'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroBg from "@/public/images/hero-bg.png"
import Link from 'next/link'

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col justify-center gap-6 py-6 lg:py-10"
  >
    {/* Badge */}
    <div className="inline-flex items-center w-fit gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold border border-blue-100 shadow-sm">
      <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
      HIPAA Compliant Solutions
    </div>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
      Your All-in-One{" "}
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        RCM Partner
      </span>
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
      Streamline every phase of your revenue cycle. Reduce denials, improve collections, and gain complete financial clarity with our expert billing solutions.
    </p>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      {['Reduced Denials', 'Faster Reimbursements', 'Transparent Reporting'].map((item) => (
        <div key={item} className="flex items-center gap-2 text-slate-700 font-medium text-sm sm:text-base">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
          {item}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <Link href={'/contact'} className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
        Book a Meeting
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Secondary CTA (optional but improves UX) */}
      {/* <button className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 hover:border-blue-500 rounded-xl font-semibold text-gray-700 hover:text-blue-600 transition">
        Learn More
      </button> */}
    </div>
  </motion.div>
)

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative w-full h-[300px] sm:h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-white/40"
  >
    <Image
      src={heroBg}
      alt="Medical Billing Professional"
      fill
      priority
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

    {/* Glow Effect */}
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
  </motion.div>
)

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-10 lg:py-16">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content */}
          <HeroContent />

          {/* Image */}
          <HeroImage />

        </div>

      </div>
    </section>
  )
}

export default HeroSection