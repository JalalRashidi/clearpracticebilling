'use client'
import Link from "next/link"
import Logo from "../ui/Logo"
import NavLink from "../ui/NavLink"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="p-4 sticky top-0 z-50 ">
      <nav className="container  mx-auto max-w-7xl bg-linear-to-br from-gray-50/50 to-gray-100/50 backdrop-blur-2xl rounded-2xl px-4 md:px-6 py-4 border border-gray-200/50">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2 items-center">
            <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>
            <NavLink href="/services" isActive={pathname.startsWith("/services")}>Services</NavLink>
            <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
            <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
            <NavLink href="/blog" isActive={pathname.startsWith("/blog")}>Blog</NavLink>

          </ul>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Book A Meeting
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200/50">
            <ul className="flex flex-col gap-2">
              <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>
              <NavLink href="/services" isActive={pathname.startsWith("/services")}>Services</NavLink>
              <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
              <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
              <NavLink href="/blog" isActive={pathname.startsWith("/blog")}>Blog</NavLink>

            </ul>
            <Link
              href="/contact"
              className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 shadow-md shadow-blue-600/20"
            >
              Book A Meeting
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
