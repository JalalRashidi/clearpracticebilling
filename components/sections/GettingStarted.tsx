'use client';
import { FileSearch, BarChart, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery & Evaluation",
    description:
      "A focused, no-pressure call to understand your current billing setup, challenges, and goals.",
    icon: FileSearch,
  },
  {
    title: "Revenue Audit & Setup",
    description:
      "We review past claims to identify errors, missed revenue opportunities, and workflow gaps.",
    icon: BarChart,
  },
  {
    title: "Go-Live With Full Support",
    description:
      "Meet your dedicated billing lead. We finalize setup and begin claim submission within 24 hours.",
    icon: Rocket,
  },
];

export default function GettingStarted() {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Getting Started Is Easier Than You Think
          </h2>
          <p className="text-gray-500 mt-3">
            A Simple, Structured Start — Built for Reliable Results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group perspective"
              >
                <div className="relative h-64 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">

                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 backface-hidden border-2 border-blue-500">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">
                      {step.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-blue-600 text-white rounded-2xl shadow-md flex items-center justify-center p-6 rotate-y-180 backface-hidden">
                    <p className="text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom CSS (important for flip) */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}