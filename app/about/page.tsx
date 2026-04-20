import {  TrendingUp, Send, AlertCircle, Rocket , Target, Eye, Award, CheckCircle } from 'lucide-react'


const values = [
  {
    icon: CheckCircle,
    title: '92–95% First-Pass Acceptance Rate',
    description: 'Our optimized billing workflows and accuracy checks ensure most claims are approved on the first submission, reducing rework and accelerating reimbursements.'
  },
  {
    icon: TrendingUp,
    title: '10–15% Increase in Collections',
    description: 'We identify missed revenue opportunities, reduce denials, and improve follow-ups to help you consistently collect more within the first 90 days.'
  },
  {
    icon: Send,
    title: 'All Clean Claims Submitted Within 24 Hours',
    description: 'Our experienced billing specialists process and submit error-free claims within one business day, helping you maintain a steady and predictable cash flow.'
  },
  {
    icon: AlertCircle,
    title: 'Denials Reviewed and Appealed Within 48–72 Hours',
    description: 'Denied claims are quickly analyzed and appealed with proper documentation, minimizing revenue loss and improving recovery rates.'
  },
  {
    icon: Rocket,
    title: 'Onboarding Completed in 5–7 Business Days',
    description: 'We ensure a smooth and efficient onboarding process, allowing your practice to transition quickly with minimal disruption to operations.'
  }
];
const team = [
  { name: 'Dr. Sarah Johnson', role: 'Chief Medical Officer', specialty: 'Cardiology' },
  { name: 'Dr. Michael Chen', role: 'Head of Neurology', specialty: 'Neurology' },
  { name: 'Dr. Emily Davis', role: 'Lead Dermatologist', specialty: 'Dermatology' },
  { name: 'Dr. James Wilson', role: 'Orthopedic Surgeon', specialty: 'Orthopedics' }
]

const milestones = [
  { year: '2008', title: 'Founded', description: 'Started with a vision to transform healthcare' },
  { year: '2012', title: 'Expansion', description: 'Opened 5 new specialty departments' },
  { year: '2018', title: '10K Patients', description: 'Reached milestone of 10,000 patients served' },
  { year: '2024', title: 'Top Rated', description: 'Recognized as top healthcare provider' }
]

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Precision-Driven Medical Billing. <br /> Transparent Pricing. <br /> <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Real Results.</span>
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed text-justify">
            At Global Tech Billing LLC, we help healthcare providers simplify their revenue cycle, reduce administrative strain, and recover more of what they’ve earned — without the cost of managing an in-house billing team. With over a decade of real-world billing experience and deep knowledge across 50+ specialties, we act as a direct extension of your practice — not just another outsourced vendor.

          </p>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed text-justify">
           Whether you’re running a solo clinic or managing a multi-location group, we deliver structure, speed, and precision — ensuring faster collections, fewer denials, and full financial visibility.

          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="flex-1">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">95%+</div>
                  <div className="text-teal-100 text-sm">Acceptance Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">10–15%</div>
                  <div className="text-teal-100 text-sm">Growth In Revenu</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">25+</div>
                  <div className="text-teal-100 text-sm">Specialties</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">10+</div>
                  <div className="text-teal-100 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Mission</h3>
                  <p className="text-slate-500 leading-relaxed text-justify">
                   Our mission is to empower healthcare providers to achieve financial success in their business. We offer tailored solutions designed to optimize financial operations, streamline billing processes, and enhance revenue streams. By partnering with us, you gain a strategic ally dedicated to your practice’s prosperity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Eye className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Our Vision</h3>
                  <p className="text-slate-500 leading-relaxed text-justify">
                    We take pride in transforming financial challenges into opportunities for growth. With expert guidance and cutting-edge technology, we ensure your practice remains financially robust, allowing you to focus on delivering exceptional patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
           
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              What Set  <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Us Apart?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:inline-grid lg:grid-cols-3 gap-6 ">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 group text-center ">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      

        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Meet Our <span className="bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="h-48 bg-linear-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-teal-600 font-bold text-3xl shadow-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors duration-200">{member.name}</h3>
                  <p className="text-teal-600 text-sm font-medium">{member.role}</p>
                  <p className="text-slate-500 text-sm mt-1">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Built for Practices That Want More Than Just Claim Processing</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-justify">
            We don’t just get your claims out the door — we help you spot revenue leaks, fix process gaps, and forecast collections with clarity. Our team plugs into your workflow, integrates with your EHR, and delivers full-cycle billing — from patient intake to final payment reconciliation. Whether you’re navigating insurance-heavy billing, complex coding rules, or just tired of chasing your current biller — we can help.
          </p>
          <a href="/contact" className="inline-block  bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
