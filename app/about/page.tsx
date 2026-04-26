import {  TrendingUp, Send, AlertCircle, Rocket , Target, Eye, Award, CheckCircle } from 'lucide-react'
import Image from 'next/image'
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


const qualities = [
  {
    title: 'Transparent Pricing',
    description:
      'We don’t charge for claim submissions, task hours, or platform fees. Our flat 2% rate applies only to the payments you actually receive. If you don’t get paid, we don’t either. That’s how confident we are in our ability to deliver real results.',
    img: '/quality/q1.png'
  },
  {
    title: 'Aggressive Follow-Up, Faster Payments',
    description:
      'We don’t just submit claims. We follow up, appeal, and get your money moving — reducing A/R days and denial backlog.',
    img: '/quality/q2.png'
  },
  {
    title: 'HIPAA-Compliant and Audit-Ready',
    description:
      'Our workflows are aligned with payer standards and built to withstand audits — keeping you protected and worry-free.',
    img: '/quality/q3.png'
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'We utilize the latest billing software and tools to streamline your operations, enhance accuracy, and ensure you stay ahead of industry changes.',
    img: '/quality/q4.jpg'
  },
  {
    title: 'Live Reporting and Full Visibility',
    description:
      'You’ll know where your revenue stands at all times — no chasing spreadsheets or waiting for monthly updates.',
    img: '/quality/q5.jpg'
  },
  {
    title: 'Specialty-Aligned Billers',
    description:
      'Our team includes billers with expertise in over 25 medical specialties, ensuring your claims are coded accurately and optimized for maximum reimbursement.',
    img: '/quality/q6.jpg'
  }
];



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
            At Clear Practice Billing, we help healthcare providers simplify their revenue cycle, reduce administrative strain, and recover more of what they’ve earned — without the cost of managing an in-house billing team. With over a decade of real-world billing experience and deep knowledge across 50+ specialties, we act as a direct extension of your practice — not just another outsourced vendor.

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
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Qualities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Choose Us <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Why Doctors </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality) => (
              <div key={quality.title} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="h-48 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                 <Image src={quality.img} alt={quality.title} width={120} height={120} className="object-contain rounded-full" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900  transition-colors duration-200">{quality.title}</h3>
                  <p className=" text-sm ">{quality.description}</p>
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
