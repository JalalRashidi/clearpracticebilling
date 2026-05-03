import HeroSection from "@/components/sections/HeroSection";
// import ServicesSection from "@/components/sections/ServicesSection";
// import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
// import AwardsSection from "@/components/sections/AwardsSection";
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react";
import RMCSection from "@/components/sections/RMCSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import OurBillingProcess from "@/components/sections/OurBillingProcess";
import GettingStarted from "@/components/sections/GettingStarted";
import Review from "@/components/sections/Reviews";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ServicesSection />
      <SpecialtiesSection />
      <AwardsSection /> */}
      <WhyYouChoseUs />
   
      <RMCSection />
      <SpecialtiesSection />
     
      <OurBillingProcess/>
      <GettingStarted />
      <Review />
      <div className="max-w-7xl mx-auto p-4">

      <ContactForm />
      </div>
      
    </>
  );
}
const WhyYouChoseUs = () => (
<div className="max-w-7xl mx-auto space-y-8 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
  {/* Header Section */}
  <div className="space-y-3">
    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
      Partner with Experts
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
      Why Choose <span className="text-blue-600">Global Tech Billing?</span>
    </h2>
    <p className="text-lg text-slate-600 leading-relaxed">
      We don’t just submit claims—we act as a high-performance extension of your 
      practice, managing the entire lifecycle to ensure you collect every dollar earned.
    </p>
  </div>

  {/* Feature Grid - Makes the wall of text scannable */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { title: "Eligibility Verification", desc: "Real-time coverage checks." },
      { title: "Denial Management", desc: "Aggressive appeal strategies." },
      { title: "Aging Follow-up", desc: "Zeroing out old accounts." },
      { title: "Cash Flow Focus", desc: "Reduced delays & write-offs." },
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-3 group">
        <div className="mt-1 bg-blue-50 p-1 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800">{item.title}</h4>
          <p className="text-sm text-slate-500">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Refined CTA */}
  <div className="pt-4">
    <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 flex items-center justify-center gap-2 group active:scale-95">
      Book a Consultation
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Link>
    <p className="mt-3 text-xs text-center sm:text-left text-slate-400">
      Stop leaving money on the table. Speak with an expert today.
    </p>
  </div>
</div>
)

