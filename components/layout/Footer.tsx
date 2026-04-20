import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 ">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="space-y-4">
          <Image
            src="/logo.png" // replace with your logo
            alt="Global Tech Billing"
            width={180}
            height={50}
          />

          <p className="text-white text-sm leading-relaxed">
            A trusted medical billing partner, providing secure, efficient, and
            results-driven solutions that support the financial health of
            healthcare practices nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-white text-sm">
            {[
              "Medical Billing",
              "Revenue Cycle Management",
              "Medical Coding",
              "Credentialing and Enrollment",
              "Medical Scribe",
              "Digital Marketing",
            ].map((item) => (
              <li
                key={item}
                className=" cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-white text-sm">
            {["About", "Services", "Contact", "Privacy Policy"].map((item) => (
              <li
                key={item}
                className=" cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get In Touch
          </h3>

          <div className="space-y-3 text-white text-sm">
            <p>
              <span className="font-medium text-white">Phone:</span>{" "}
              (424) 231-4181
            </p>
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              info@globaltechbilling.com
            </p>
            <p>
              5396 N Reese Ave Fresno, CA 93722 <br />
              (Virtual Address)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 text-white text-center py-4 text-sm">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
}