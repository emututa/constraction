import React from 'react'
import Image from 'next/image'
import pro from '@/public/imgs/project.png'
import CompletedPro from './CompletedPro'
import { FaMedal,FaUserTie,FaBuilding } from 'react-icons/fa'

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center  mt-[150px]  '>
      <h2 className='text-[#0E3998] text-[30px] font-extrabold md:text-[60px]'>WHY US?</h2>
       {/* <div className="w-[50px] h-[5px] text-[#FFBC01] mt-[25px] mb-[15px]"></div> */}
      <div className="w-[50px] h-[5px] bg-[#FFBC01] mt-[30px] mb-[40px]"></div>
      <div className="w-[90px] h-[10px] text-[#0E3998] "></div>
      <Image src={pro} alt=""  height={500} className='w-[80%] z-11 -mb-15 md:-mb-52'/>

      <div className="flex  pt-[60px] w-[100%] flex-col justify-center items-center  bg-[#0E3998]">
        
      <div className="flex flex-col   md:justify-around w-[90%]  md:flex-row">

      <CompletedPro
      icon={FaMedal}
      heading='20+ YEARS EXPERIENCE'
      
      paragra='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />

      <CompletedPro
      icon={FaUserTie}
      heading=' PROFESSIONAL SERVICES'
      
      paragra='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />

      <CompletedPro
      icon={FaBuilding}
      heading='100+ COMPLETED PROJECTS'
      
      paragra='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />
      </div>
      <div className="h-[1px] w-[90%] bg-gray-300 mt-[110px] md:my-[60px]"></div>

      </div>
       

    </div>
  )
}

export default Project
