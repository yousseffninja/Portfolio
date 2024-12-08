import React from 'react';
import SectionHeader from "@/Components/Helper/SectionHeader";
import {aboutInfo} from "@/Data/data";
import {FaCheck} from "react-icons/fa";
import Image from "next/image";

const About = () => {
    return (
        <div className='px-16 bg-[#050709]'>
            <SectionHeader>About Me</SectionHeader>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
                {/* Text Content */}
                <div>
                    <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gray-200'>
                        {aboutInfo?.title}
                    </h1>
                    <p className='mt-6 text-base text-gray-500'>
                        {aboutInfo?.description}
                    </p>
                    <div className='mt-8'>
                        <div className='flex items-center space-x-2 mb-6'>
                            <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                                <FaCheck className='text-white'/>
                            </div>
                            <p className='text-sm sm:text-base ms:text-lg font-bold text-gray-300'>
                                Frontend Development
                            </p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='flex items-center space-x-2 mb-6'>
                            <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                                <FaCheck className='text-white'/>
                            </div>
                            <p className='text-sm sm:text-base ms:text-lg font-bold text-gray-300'>
                                Backend Development
                            </p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='flex items-center space-x-2 mb-6'>
                            <div className='w-7 h-7 bg-red-800 flex flex-col items-center justify-center'>
                                <FaCheck className='text-white'/>
                            </div>
                            <p className='text-sm sm:text-base ms:text-lg font-bold text-gray-300'>
                                Fullstack Development
                            </p>
                        </div>
                    </div>
                </div>
                {/* Stats Content */}
                <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
                    <div>
                        <Image
                            src='/images/customer.png'
                            width={80}
                            height={80}
                            alt='Customer'
                            className='mx-auto'
                        />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo?.client}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Customers</p>
                    </div>
                    <div>
                        <Image
                            src='/images/experience.png'
                            width={80}
                            height={80}
                            alt='Experience'
                            className='mx-auto'
                        />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo?.experience}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
                    </div>
                    <div>
                        <Image
                            src='/images/completed.png'
                            width={80}
                            height={80}
                            alt='Completed'
                            className='mx-auto'
                        />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo?.project}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Completed Project</p>
                    </div>
                    <div>
                        <Image
                            src='/images/rocket.png'
                            width={80}
                            height={80}
                            alt='Rocket'
                            className='mx-auto'
                        />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo?.website}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Website Launched</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;