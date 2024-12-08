"use client";

import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNave = () => {
    const [showNav, setShowNav] = useState(false)

    const showNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

  return (
    <div>
        <Nav openNav={showNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNave