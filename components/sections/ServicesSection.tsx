import { Stethoscope, Clock, Shield, HeartPulse, Microscope, Pill } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkup',
    description: 'Comprehensive health assessments to keep you in optimal condition.'
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency care when you need it most.'
  },
  {
    icon: Shield,
    title: 'Health Insurance',
    description: 'We accept all major insurance plans for your convenience.'
  },
  {
    icon: HeartPulse,
    title: 'Cardiology',
    description: 'Expert heart care with state-of-the-art diagnostic tools.'
  },
  {
    icon: Microscope,
    title: 'Lab Testing',
    description: 'Accurate and fast laboratory testing services on-site.'
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'In-house pharmacy with all prescribed medications available.'
  }
]

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Link href="/doctors" >
  <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 group">
    <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300">
      <Icon className="text-teal-600" size={28} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
  </Link>
)

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Comprehensive Healthcare <span className="bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We provide a wide range of medical services to meet all your healthcare needs under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
