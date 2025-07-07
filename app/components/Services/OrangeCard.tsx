import React from 'react'
import Icons from './Icons'
import { FaYelp, FaFacebook,FaTwitter,FaHouzz } from 'react-icons/fa'



const OrangeCard = () => {
  return (
    <div>
        <div className='bg-[#FFBC01] w-[332px] p-7 md:w-[365px] md:p-7'>
     <h1 className='bold font-serif text-[30px] text-white py-7 pt-[1px] md:py-7 font-extrabold'>PROFESSIONAL  <br /> AND RELIABLE <br /> SERVICES.</h1>
     <p className='border-2 w-15 text-white' ></p>
     <div className='flex text-white py-7 pb-[10px] md:pb-[132px]'>

     <Icons Icon={<FaYelp/>}  bg='bg-blue-950'/>
     <Icons Icon={<FaFacebook/>}  bg='bg-blue-950'/> 
     <Icons Icon={<FaTwitter/>}  bg='bg-blue-950'/> 
     <Icons Icon={<FaHouzz/>}  bg='bg-blue-950'/> 
     <Icons Icon={<FaHouzz/>} bg='bg-blue-950'/>
     </div>  
    </div>

    </div>
  )
}

export default OrangeCard
