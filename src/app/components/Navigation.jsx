import React from 'react'
import Link from 'next/link'
import { HomeIcon,UserIcon, ChartBarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";


const Navigation = () => {
  return (
    <div className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto'>
            <div className='w-full bg-black/20 h-[66px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
                <Link href="#home" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
                 <HomeIcon className="h-5 w-5 text-[#ADB7BE]"/>
                </Link>
                <Link href="#about" className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  >
                 <UserIcon className="h-5 w-5 text-[#ADB7BE]"/>
                </Link>
                <Link href={"#work"} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  >
                 <ChartBarIcon className="h-5 w-5 text-[#ADB7BE]" />
                </Link>
                <Link href={"#contact"} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'  >
                 <EnvelopeIcon className="h-5 w-5 text-[#ADB7BE]" />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Navigation