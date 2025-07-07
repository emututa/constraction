import React from 'react'
import Image,{StaticImageData} from "next/image"
import { IconType } from "react-icons"
// import Icons from '../components/Services/Icons'


interface clientprops {

    quote :IconType
    text  : string
    star  : IconType
    image : StaticImageData
    name  : string
}



const ClientsCards = ({quote:QuoteIcon,text,star:StarIcon,image,name}:clientprops) => {
  return (
    <div className=' bg-white rounded-[8px] mt-[20px] md:mt-[0px]   '>
      <QuoteIcon size={30}  className='text-[#0E3998] my-[30px] mx-[30px] md:my-[30px] '/>
      <p className='px-[20px] md:m-[30px] text-gray-600 ' >{text}</p>
      <div className="flex my-[25px] mx-[30px] space-x-0.5 md:my-[30px]">
      <StarIcon size={15} className='text-[#FFBC01]' />
      <StarIcon size={15} className='text-[#FFBC01]' />
      <StarIcon size={15} className='text-[#FFBC01]' />
      <StarIcon size={15} className='text-[#FFBC01]' />
      <StarIcon size={15} className='text-[#FFBC01]' />
      </div>
      <div className="border-1 border-gray-100 w-[85%] mx-[30px] "></div>
      <div className="flex mt-[7px] text-[#0E3998] font-extrabold md:mt-[10px]">
      <Image src={image} alt="happy_clients" width={60} height={60} className='rounded-full mx-[30px] my-[15px] md:m-[30px]'/>
      <p className='mt-[20px] md:mt-[20px]'>{name}</p>
      </div>
    </div>
  )
}

export default ClientsCards
