import Link from 'next/link'
import React from 'react'

const NavLink = ({
  href,
  children,
  isActive = false
}: {
  href: string
  children: React.ReactNode
  isActive?: boolean
}) => (
  <li>
    <Link
      href={href}
      className={`
        relative px-3 py-2 rounded-lg font-medium transition-all duration-200
        ${isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-slate-600 hover:text-blue-600 hover:bg-gray-50'
        }
      `}
    >
      {children}
    </Link>
  </li>
)

export default NavLink
