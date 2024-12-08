'use client'
import { NavLinks } from '@/constrant/constrant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

//define props type

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 70) {
                setNavBg(true);
            }
            if (window.scrollY < 70) {
                setNavBg(false);
            }
        } 
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, [])

    return (
        <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] z-[10]  w-full transition-all duration-200`} >
            <div className='flex item-center h-full justify-between w=[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* logo */}
                <Image 
                    src={'/images/Scar.png'} 
                    width={100} 
                    height={100} 
                    alt='logo' 
                    className='w-[100px] h-[100px] my-6'
                />
                {/* Nav links */}
                <div className='flex items-center space-x-10 text-white' >
                <div className='hidden lg:flex items-center space-x-8'>
                        {NavLinks.map((link) => (
                            <Link href={link.url} key={link.id} >
                                <p className='nav__link' >{link.label}</p>
                            </Link>
                        ))}
                </div>
                {/* button */}
                <div className='flex items-center space-x-4' >
                    <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-grey-200 transition-all duration-200 rounded-lg' >
                        Hire Me
                    </button>
                    {/*Burger*/}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
                </div>
            </div>
        </div>
  )
}

export default Nav