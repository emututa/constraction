import React from 'react'
import Image from 'next/image'
import logo from '@/public/imgs/logo.png'
import bbb from '@/public/imgs/bbb.png'
import best from '@/public/imgs/best.png'
import top from '@/public/imgs/top.png'
import people from '@/public/imgs/people.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarker, FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-evenly pt-20 pb-20 px-[20px] text-white space-x-9 bg-[#071d4C]/900 flex-col md:flex-row'>
      
      {/* Left Section */}
      <div className="gap-20">
        <Link href="">
          <Image src={logo} alt="Logo" width={170} height={140} className='my-0' />
        </Link>

        <div className="flex mt-[15px]">
          <FaPhoneAlt className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18} />
          <p>+263 777-187-003</p>
        </div>

        <div className="flex mt-[15px]">
          <FaEnvelope className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18} />
          <p>mututaemmanuel52@gmail.com</p>
        </div>

        <div className="flex mt-[15px]">
          <FaMapMarker className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18} />
          <div className="flex flex-row md:flex-col">
            <p>29th 13th-crescent,</p>
            <p>Harare Zimbabwe</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-[100px] gap-20 md:mt-[0px]">
        <div>
          <h4 className='font-extrabold'>OUR SERVICES</h4>
          <p className='text-white/20'>{/* ///////////////////////////////////////////// */}</p>
        </div>

        <div className="pt-[40px] space-y-2">
          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <p>General Contract</p>
          </div>
          <div className="w-full border-b border-white/20 my-2" />

          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <p>Project Planning</p>
          </div>
          <div className="w-full border-b border-white/20 my-2" />

          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <div className="flex flex-col">
              <p>House</p>
              <p>Refurbishment</p>
            </div>
          </div>
          <div className="w-full border-b border-white/20 my-2" />

          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <p>Kitchen Remodeling</p>
          </div>
          <div className="w-full border-b border-white/20 my-2" />

          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <p>Interior Design</p>
          </div>
          <div className="w-full border-b border-white/20 my-2" />

          <div className="flex items-start">
            <FaAngleRight className='text-[#FFBC01] mt-1 mr-2' />
            <p>House Extension</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full mt-[100px] md:w-[30%]">
        <h4 className='font-extrabold'>A FEW WORDS ABOUT US</h4>
        <p className='text-white/20'>{/* ///////////////////////////////////////////// */}</p>

        <p className='py-[40px]'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <div className="flex space-y-5 flex-col items-center md:flex-row md:justify-start md:items-start md:space-y-0 md:space-x-5">
          <Image src={bbb} alt="bbb" width={90} height={90} className='w-22 h-22 md:w-20 md:h-20' />
          <Image src={best} alt="best" width={70} height={70} className='w-22 h-22 md:w-20 md:h-20' />
          <Image src={top} alt="top" width={70} height={70} className='w-22 h-22 md:w-20 md:h-20' />
          <Image src={people} alt="people" width={70} height={70} className='w-22 h-22 md:w-20 md:h-20' />
        </div>
      </div>
    </div>
  )
}

export default Footer
