import React from 'react';
import ContactForm from "@/Components/Home/Contact/ContactForm";
import ContactInfo from "@/Components/Home/Contact/ContactInfo";

const Contact = () => {
    return (
        <div className='py-16 bg-[#050709]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 2-[80%] mx-auto items-center gap-10 mt-10'>
                {/* Contact Form */}
                <div>
                    <ContactForm />
                </div>
                {/* Contact Info */}
                <div className='xl:mx-auto'>
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};

export default Contact;