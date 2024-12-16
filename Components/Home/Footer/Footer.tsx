import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div className='py-16 bg-[#0f0715]' >
            <div>
                <Image
                    src='/images/Scar.png'
                    alt='Logo'
                    width={100}
                    height={100}
                    className='mx-auto'
                />
            </div>
            <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold'>
               <div></div>
                <div>Home</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Contacts</div>
            </div>
            <p className='text-white text-opacity-60 mt-6 text-center'>

                © {new Date().getFullYear()} Youssef Saleh. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;