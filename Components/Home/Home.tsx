import React from 'react'
import Profile from '@/Components/Home/Profile/Profile';
import About from "@/Components/Home/About/About";
import Service from "@/Components/Home/service/Serivce"
import Project from "@/Components/Home/Project/Project";

const Home = () => {
    return (
        <div className='overflow-hidden' >
            <Profile />
            <About />
            <Service />
            <Project />
        </div>
    )
}

export default Home;