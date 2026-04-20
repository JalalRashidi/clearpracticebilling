import { Award, Users, Building2, ThumbsUp, } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '50K+', label: 'Happy Patients' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Building2, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '99%', label: 'Patient Satisfaction' }
]

const awards = [
  { year: '2024', title: 'Best Healthcare Provider', org: 'Medical Excellence Awards' },
  { year: '2023', title: 'Top Patient Care Clinic', org: 'Healthcare Quality Council' },
  { year: '2023', title: 'Innovation in Medicine', org: 'National Health Institute' },
  { year: '2022', title: 'Community Health Champion', org: 'City Health Department' }
]

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="text-center p-6">
    <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon className="text-teal-600" size={28} />
    </div>
    <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-slate-500 text-sm">{label}</div>
  </div>
)

const AwardCard = ({ year, title, org }: { year: string, title: string, org: string }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
    <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shrink-0">
      <Award className="text-white" size={24} />
    </div>
    <div>
      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">{year}</span>
      <h4 className="font-semibold text-slate-900 mt-2">{title}</h4>
      <p className="text-sm text-slate-500">{org}</p>
    </div>
  </div>
)

const AwardsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Award-Winning <span className="bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Healthcare</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Recognized for excellence in patient care, medical innovation, and community service.
          </p>
        </div>

        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 border border-slate-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <AwardCard key={award.title} {...award} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/about" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-xl font-medium transition-all duration-200">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
