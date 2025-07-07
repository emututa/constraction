import React from 'react'
import ClientsCards from './ClientsCards'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import oranget from '@/public/imgs/orange_tshirt.png'
import shades from '@/public/imgs/blackshades.png'
import jacket from '@/public/imgs/blackjacket.png'

const HappyClients = () => {
  return (
    <div className=' flex flex-col justify-center items-center mt-[100px]  '>
        
        <h2 className='text-[#0E3998] font-extrabold text-[35px] text-center md:text-[60px]  '>OUR HAPPY CLIENTS!</h2>
          <div className="w-[70px] h-[2px] bg-gray-500 mt-[30px] mb-[40px]"></div>
      
        <div className=" flex flex-col px-7 md:flex-row md:gap-5 md:px-15">
        <ClientsCards
        quote={FaQuoteLeft}
        text= 'Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.'
        star={FaStar}
        image={oranget}
        name='JEMMA STONE'
        />

        <ClientsCards
        quote={FaQuoteLeft}
        text= 'Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.'
        star={FaStar}
        image={shades}
        name='JOE KELLY'
        />

        <ClientsCards
        quote={FaQuoteLeft}
        text= 'Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.'
        star={FaStar}
        image={jacket}
        name='STELLAR ALBA'
        />
        </div>
      
    </div>
  )
}

export default HappyClients
