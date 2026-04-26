import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
  <div className="text-2xl font-bold tracking-tight">
    <Link
      href="/"
      className="hover:text-teal-600 transition-colors duration-200"
    >
     
      
       <Image
        src="/cplogo1.png"
        alt="TopDoc Logo"
        width={1024}
        height={343}
        className="w-32"
       />
       {/* <h1>Global Tech Billing</h1> */}
    </Link>
  </div>
  )
}

export default Logo
