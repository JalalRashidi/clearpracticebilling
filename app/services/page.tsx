import React from 'react'

const pages = () => {
  return (
    <ServicesSection />
  )
}

export default pages

import Image from 'next/image'
import Link from 'next/link'
 function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      
      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={service.img_url}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-4">
          {service.description}
        </p>

        <Link href="/contact" className="mt-auto text-blue-600 font-medium hover:underline mx-auto">
          Contact Us  →
        </Link>
      </div>
    </div>
  );
}
const services = [
  {
    id: "01",
    title: "Insurance Benefits Verification & Authorization Services",
    description: "Understanding insurance benefits can be complex, but our expert team simplifies the process for you. We verify patient benefits, obtain necessary authorizations, and ensure accuracy to prevent claim denials. By handling these critical tasks, we save you time and enhance your practice’s efficiency. Trust us to navigate the complexities of insurance, so you can focus on delivering exceptional patient care with confidence.",
    img_url: "/services-card-image/Global-tech-billing-services-1.png"
  },
  {
    id: "02",
    title: "Denial Management",
    description: "Claim denials can be frustrating and time-consuming. Our denial management services are designed to address these challenges effectively. We analyze denied claims, identify root causes, and implement corrective actions to secure accurate reimbursements. With our proactive approach and industry expertise, we turn denials into opportunities for growth, ensuring that your revenue cycle remains uninterrupted and efficient.",
    img_url: "/services-card-image/Global-tech-billing-services-2.png"
  },
  {
    id: "03",
    title: "A/R Recovery Services",
    description: "Unpaid accounts can hinder your practice’s financial health. Our A/R recovery services specialize in reducing outstanding balances by following up on overdue accounts and ensuring timely collections. We streamline recovery processes to maximize cash flow, allowing you to focus on patient care. With our expertise, we help you recover lost revenue and maintain financial stability effortlessly.",
    img_url: "/services-card-image/Global-tech-billing-services-3.png"
  },
  {
    id: "04",
    title: "Virtual Front Desk Support",
    description: "Efficient front desk operations are essential to a well-run practice. Our virtual front desk support helps manage scheduling, patient communication, insurance coordination, and routine administrative tasks with accuracy and consistency. We handle day-to-day interactions promptly and professionally, ensuring patients receive timely responses while reducing the workload on your in-house staff. By improving operational efficiency and maintaining clear communication, we support a smoother workflow and a more organized practice environment.",
    img_url: "/services-card-image/Global-tech-billing-services-4.png"
  },
  {
    id: "05",
    title: "Credentialing Services",
    description: "Navigating the credentialing process can be overwhelming, but our team ensures it’s done right. We handle everything from verifying provider credentials to managing payer enrollments, ensuring compliance with industry standards. Our services reduce delays and help you get credentialed faster, so you can focus on expanding your practice and delivering top-quality care to your patients.",
    img_url: "/services-card-image/Global-tech-billing-services-5.png"
  },
  {
    id: "06",
    title: "Medical Coding Services",
    description: "Accurate medical coding is vital for proper reimbursements and compliance. Our certified coders provide precise coding solutions tailored to your practice’s needs. By staying updated with the latest regulations, we minimize errors and ensure faster claims processing. Trust our expertise to enhance your revenue cycle while maintaining the highest coding standards.",
    img_url: "/services-card-image/Global-tech-billing-services-6.png"
  },
  {
    id: "07",
    title: "Revenue Cycle Management",
    description: "Maximize your practice’s financial health with our comprehensive revenue cycle management services. We streamline processes, from patient registration to final reimbursement, ensuring efficient cash flow. With a focus on accuracy and transparency, we handle billing, coding, and collections, allowing you to concentrate on providing exceptional patient care.",
    img_url: "/services-card-image/Global-tech-billing-services-7.png"
  },
  {
    id: "08",
    title: "Medical Billing Service",
    description: "Simplify your billing processes with our specialized medical billing services. From claim submission to payment posting, we manage every detail to ensure timely and accurate reimbursements. Our expertise reduces errors and denials, enhancing your revenue and minimizing stress. Partner with us for a seamless billing experience that supports your practice’s financial growth.",
    img_url: "/services-card-image/Global-tech-billing-services-8.png"
  },
  {
    id: "09",
    title: "Digital Marketing Services for Healthcare Providers",
    description: "Expand your practice’s reach with our tailored digital marketing services. We specialize in creating effective strategies, including SEO, social media management, and online advertising, to attract more patients. By leveraging cutting-edge tools and healthcare-specific expertise, we help your practice grow its online presence and connect with the right audience.",
    img_url: "/services-card-image/Global-tech-billing-services-9.png"
  },
  {
    id: "10",
    title: "Virtual Medical Scribe",
    description: "Focus on your patients while we handle documentation. Our virtual medical scribe services ensure accurate and detailed medical records, freeing up your time for patient care. By managing EHR entries and streamlining documentation, we improve efficiency and reduce administrative burdens, allowing you to deliver high-quality healthcare effortlessly.",
    img_url: "/services-card-image/Global-tech-billing-services-10.png"
  }
]
function ServicesSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
           Expert Services to Simplify Healthcare Billing Processes
          </h2>
          <p className="text-gray-500 mt-3">
            We provide high-quality solutions to improve your business workflow
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service:any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}