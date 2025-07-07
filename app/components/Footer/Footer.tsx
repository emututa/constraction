import React from 'react'
import Image from 'next/image'
import logo from '@/public/imgs/logo.png'
import bbb from '@/public/imgs/bbb.png'
import best from '@/public/imgs/best.png'
import top from '@/public/imgs/top.png'
import people from '@/public/imgs/people.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaMapMarker } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='flex justify-evenly pt-20 pb-20 px-[20px]  text-white space-x-9 bg-[#071d4C]/900 flex-col md:flex-row '>

        <div className=" gap-20">

        <Link href="" >
        <Image src={logo} alt="" width={170} height={140} className='my-0' />
        </Link>

        <div className="flex mt-[15px]">
        <FaPhoneAlt className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18}/>
        <p>+263 777-187-003</p>
        </div>

        <div className="flex mt-[15px]">
            <FaEnvelope className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18} />
            <p>mututaemmanuel52@gmail.com</p>
        </div>

        <div className="flex mt-[15px]">
            <FaMapMarker className='text-[#FFBC01] mt-[4px] mr-[15px]' size={18}/>
            <div className="flex  flex-row  md:flex-col ">
            <p>29th 13th-crescent,</p>
            <p>Harare Zimbabwe</p>
            </div>
        
        </div>

    </div>

    {/* middle section */}

    <div className="  mt-[100px] gap-20 md:mt-[0px]">
        <div className="">
            <h4 className='font-extrabold'>OUR SERVICES</h4>
            <p className='text-white/20  '>////////////////////////////////////////////////////////////////////////</p>
        </div>

        <div className="pt-[40px]">

           <div className="flex ">
            <FaAngleRight className='text-[#FFBC01]'/>
            <p>General Contract</p>
            </div>
            <div className="w-[100%] border-b-1 border-white/20 my-[10px] "></div>

            <div className="flex ">
            <FaAngleRight className='text-[#FFBC01]'/>
            <p>Project Planning</p>
            </div>
            <div className=" w-[100%] border-b-1 border-white/20  my-[10px]"></div>

            <div className="flex ">
            <FaAngleRight className='text-[#FFBC01]'/>
            <div className="flex flex-col">
            <p>House</p>
            <p>Refurbishment</p>
            </div>
            </div>
            <div className=" w-[100%] border-b-1 border-white/20  my-[10px]"></div>

            <div className="flex">
            <FaAngleRight className='text-[#FFBC01]'/>
            <p>Kitchen Remodeling</p>
            </div>
            <div className=" w-[100%] border-b-1 border-white/20  my-[10px]"></div>

            <div className="flex ">
            <FaAngleRight className='text-[#FFBC01] '/>
            <p>Interior Design</p>
            </div>
            <div className="w-[100%] border-b-1 border-white/20  my-[10px]"></div>

            <div className="flex ">
            <FaAngleRight className='text-[#FFBC01]'/>
            <p>House Extension</p>
            </div>
            {/* <div className=""></div> */}

        </div>
    </div>

{/* third section */}

<div className=" w-[100%] mt-[100px] ">
    <h4 className='font-extrabold'>A FEW WORDS ABOUT US</h4>
    <p>//////////////////////////////////////////////////////</p>

    <p className='py-[40px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

    <div className="flex space-y-5 flex-col justify-center items-center md:flex-row md:justify-start space-x-5 ">
        <Image src={bbb} alt=""width={90} height={90} className=' w-22 h-22 md:w-20 md:h-20'/>
        <Image src={best} alt=""width={70} height={70} className=' w-22 h-22 md:w-20 md:h-20' />
        <Image src={top} alt=""width={70} height={70} className=' w-22 h-22 md:w-20 md:h-20'/>
        <Image src={people} alt=""width={70} height={70} className=' w-22 h-22 md:w-20 md:h-20'/>
    </div>
</div>
 
      
    </div>
  )
}

export default Footer
