import { MapPin, Clock, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const DoctorCard = ({ doctor }: { doctor: any }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-linear-to-br from-teal-100 to-teal-200 rounded-xl overflow-hidden shrink-0">
            {doctor.image ? (
              <Image src={doctor.image} alt={doctor.name.first} width={80} height={80} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-teal-600 font-bold text-2xl">
                {doctor.name.first.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors duration-200 truncate">
             {doctor.prefix} {doctor.name.first} {doctor.name.middle} {doctor.name.last}
            </h3>
            <p className="text-teal-600 text-sm font-medium">{doctor.specialty}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="text-slate-400" />
            <span>{doctor.practiceLocationAddress.line1} {doctor.practiceLocationAddress.city} {doctor.practiceLocationAddress.state} {doctor.practiceLocationAddress.country}</span>
          </div>
          {/* <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock size={16} className="text-slate-400" />
            <span>{doctor.experience} years experience</span>
          </div> */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Phone size={16} className="text-slate-400" />
            <span>{doctor.practiceLocationAddress.phone} </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.taxonomies?.slice(0, 3).map((tag: any) => (
            <span key={tag._id} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
              {tag?.taxonomyId?.specialization =='' ? tag?.taxonomyId?.classification : tag?.taxonomyId?.specialization}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
        <Link href={`/doctors/${doctor._id}`} className="block w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white py-2.5 rounded-xl font-medium transition-all duration-200 shadow-md shadow-teal-600/20 text-sm text-center">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default DoctorCard
