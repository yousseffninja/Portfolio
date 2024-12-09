import React from 'react';
import SectionHeader from "@/Components/Helper/SectionHeader";
import {projectData} from "@/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
    return (
        <div className='py-16 bg-[#050709]'>
            <SectionHeader>My Projects</SectionHeader>
            <div className='w-[80%] mx-auto mt-20 grid frid cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
                {projectData?.map((project) => {
                    return (
                        <div key={project?.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'>
                            <Link
                                href={project?.url}
                                target="_blank"
                            >
                                <Image
                                    src={project?.image}
                                    alt="ProjectImage"
                                    width={500}
                                    height={1000}
                                    className='rounded-lg'
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;