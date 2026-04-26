import ContactForm from '@/components/sections/ContactForm'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@clearpracticebilling.com', 'support@clearpracticebilling.com'],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Medical Center Drive', 'New York, NY 10001'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 9:00 AM - 5:00 PM'],
  },
]

export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Get in <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ContactForm />
          </div>

          <aside className="lg:w-96 shrink-0">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
                <h3 className="font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="text-blue-600" size={22} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">{item.title}</h4>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm text-slate-500">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-white font-semibold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Our support team is available to assist you with any urgent inquiries.
                </p>
                <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-xl font-medium transition-all duration-200">
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

