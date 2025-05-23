import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1 flex items-center">
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo with name"
          width={32}
          height={32}
          className="hidden md:block"
        />
        <span className="ml-2 hidden md:block text-lg">
          Papyrus
        </span>
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  )
}

export default Header