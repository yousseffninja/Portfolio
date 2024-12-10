import React from 'react'
import Profile from '@/Components/Home/Profile/Profile';
import About from "@/Components/Home/About/About";
import Service from "@/Components/Home/service/Serivce"
import Project from "@/Components/Home/Project/Project";
import Skills from "@/Components/Home/Skills/Skills";
import Contact from "@/Components/Home/Contact/Contact";

const Home = () => {
    return (
        <div className='overflow-hidden' >
            <Profile />
            <About />
            <Service />
            <Project />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home;