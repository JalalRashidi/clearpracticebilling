import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
  <div className="text-2xl font-bold tracking-tight">
    <Link
      href="/"
      className="hover:text-teal-600 transition-colors duration-200"
    >
      {/* TopDoc<span className="text-teal-500">.</span> */}
      
       {/* <Image
        src="/logo.png"
        alt="TopDoc Logo"
        width={1024}
        height={343}
        className="w-48"
       /> */}
       <h1>Global Tech Billing</h1>
    </Link>
  </div>
  )
}

export default Logo
