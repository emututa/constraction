import React from 'react'
import { IconType } from 'react-icons'

interface completedproops {
    icon     : IconType
    heading  : string
    paragra  : string

}

const CompletedPro = ({icon:MedalIcon ,heading,paragra}:completedproops) => {
  return (
    <div className='w-[97%] text-center flex items-center flex-col mt-[0px] mt-[80px] md:w-[24%] md:mt-[300px]  '>
        <div className="flex items-center justify-center w-[90px] h-[90px] mt-[25px] rounded-full bg-white">
        <MedalIcon size={30} className='text-[#FFBC01] '/>
        </div>
        <p className='text-center text-[23px] font-extrabold text-white my-[20px]'>{heading}</p>
        <p className='text-center text-white/50'>{paragra}</p>
      
    </div>
  )
}

export default CompletedPro
