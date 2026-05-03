import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-600">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/cplogo1.png"
              alt="Global Tech Billing"
              width={180}
              height={50}
              className="cursor-pointer"
            />
          </Link>

          <p className="text-white text-sm leading-relaxed">
            A trusted medical billing partner, providing secure, efficient, and
            results-driven solutions that support the financial health of
            healthcare practices nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <Link href="https://facebook.com" target="_blank">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Facebook size={18} />
              </div>
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Instagram size={18} />
              </div>
            </Link>

            <Link href="https://youtube.com" target="_blank">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Youtube size={18} />
              </div>
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Linkedin size={18} />
              </div>
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/services">Medical Billing</Link></li>
            <li><Link href="/services">Revenue Cycle Management</Link></li>
            <li><Link href="/services">Medical Coding</Link></li>
            <li><Link href="/services">Credentialing and Enrollment</Link></li>
            <li><Link href="/services">Medical Scribe</Link></li>
            <li><Link href="/services">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/policy/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get In Touch
          </h3>

          <div className="space-y-3 text-white text-sm">
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+14242314181" className="hover:underline">
                (424) 231-4181
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@globaltechbilling.com" className="hover:underline">
                info@globaltechbilling.com
              </a>
            </p>
            <p>
              5396 N Reese Ave Fresno, CA 93722 <br />
              (Virtual Address)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-white text-center py-4 text-sm">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
}