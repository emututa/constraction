'use client'
import React, { useState } from 'react'
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import logo from '@/public/imgs/logo.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="w-full  text-white px-6 py-4 flex items-center justify-between relative">
      <Image src={logo} alt="logo" width={150} height={100} />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li className="text-[#FFBC01] cursor-pointer">Home</li>
        <li className="hover:text-[#FFBC01] cursor-pointer">Services</li>
        <li className="hover:text-[#FFBC01] cursor-pointer">About</li>
        <li className="hover:text-[#FFBC01] cursor-pointer">Projects</li>
        <li className="hover:text-[#FFBC01] cursor-pointer">Contact</li>
        <li><FaPhoneAlt size={15} /></li>
        <li>(+263) 777 187 003</li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50">
          <li className="text-[#FFBC01] cursor-pointer">Home</li>
          <li className="hover:text-[#FFBC01] cursor-pointer">Services</li>
          <li className="hover:text-[#FFBC01] cursor-pointer">About</li>
          <li className="hover:text-[#FFBC01] cursor-pointer">Projects</li>
          <li className="hover:text-[#FFBC01] cursor-pointer">Contact</li>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={15} />
            <span>(+263) 777 187 003</span>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar


