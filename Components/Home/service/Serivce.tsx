import React from 'react';
import SectionHeader from "@/Components/Helper/SectionHeader";
import {servicesData} from "@/Data/data";
import ServiceCard from "@/Components/Home/service/ServiceCard";


const Serivce = () => {
    return (
        <div className='py-16 bg-[#0f0715]' >
            <SectionHeader>Services</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20" >
                {servicesData?.map((service) => {
                    return (
                        <div key={service?.id} >
                            <ServiceCard
                                service={service}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Serivce;