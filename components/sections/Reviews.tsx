'use client';
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Hasnain and his team have been truly outstanding in managing our claims. They really care about our business and keep us informed regularly.",
    name: "Dr. Cindy",
    role: "Medical Director",
  },
  {
    text: "I am so thankful to your company and appreciate all you do to facilitate our billing/claims operations!",
    name: "Heather Hunt PhD",
    role: "Owner at Private Practice",
  },
  {
    text: "Their team is knowledgeable and reliable—we’ve seen clear improvements in both scribing and coding.",
    name: "Suresh",
    role: "Manager at Private Practice",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Client Testimonials
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{item.text}"
                </p>

                {/* User */}
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}