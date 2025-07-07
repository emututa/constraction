import React from 'react'
import Image from 'next/image'
import webuild from '@/public/imgs/webuild.png'
import constr from '@/public/imgs/const.png'
import straction from '@/public/imgs/straction.png'
import wbuild from '@/public/imgs/webuild.png'
import genral from '@/public/imgs/general.png'
import buildit from '@/public/imgs/buildit.png'


const Brands = () => {
  return (
    <div className='flex bg-[#FFBC01] py-[40px] justify-center items-center '>
        <Image src={webuild} alt="" className='w-[14%] h-[150px] border-l-1 border-r-1 border-amber-50/30 hidden md:block' />
        <Image src={constr} alt="" className='w-[14%] h-[150px] border-l-1 border-r-1  border-amber-50/30   hidden md:block' />
        <Image src={straction} alt=""className='w-[50%] h-[150px] border-l-1 border-r-1  border-amber-50/30        md:block md:w-[14%]'  />
        <Image src={wbuild} alt=""className='w-[50%] h-[150px] border-l-1 border-r-1  border-amber-50/30           md:block md:w-[14%]'  />
        <Image src={genral} alt="" className='w-[14%] h-[150px] border-l-1 border-r-1  border-amber-50/30   hidden md:block' />
        <Image src={buildit} alt="" className='w-[14%] h-[150px] border-l-1 border-r-1  border-amber-50/30  hidden md:block' />
        
      
    </div>
  ) 
}

export default Brands
