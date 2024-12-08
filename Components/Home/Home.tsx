import React from 'react'
import Profile from '@/Components/Home/Profile/Profile';
import About from "@/Components/Home/About/About";

const Home = () => {
    return (
        <div className='overflow-hidden' >
            <Profile />
            <About />
        </div>
    )
}

export default Home;