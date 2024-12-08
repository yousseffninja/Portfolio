import { NavLinks } from '@/constrant/constrant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

//define props type

type Props = {
    showNav: boolean,
    closeNav: () => void
}

const MobileNav = ({ showNav, closeNav } : Props) => {

    const navOpen = showNav? 'translate-x-0' : '-translate-x-full'

    return (
        <div>
            {/*Overlay */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full - h-screen`}> </div>
            {/*Mobile Nav Links*/}
            <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
                {NavLinks.map((link) => (
                    <Link href={link.url} key={link.id} >
                        <p className='nav__link text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px]' >{link.label}</p>
                    </Link>
                ))}
                {/* Close button */}
                <CgClose 
                    onClick={closeNav} 
                    className='absolute top-[0.7rem] right-[1.7rem] sm:w-8 sm:h-8 h-6 text-white' 
                />
            </div>
        </div>
    )
}

export default MobileNav