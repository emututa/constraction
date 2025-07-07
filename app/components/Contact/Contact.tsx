import React from 'react'


const Contact = () => {
  return (
    <div className='   bg-[url("/imgs/excavator.png")]  bg-cover h-[550px] md:bg-cover '>
        <div className="bg-[#0E3998]/95  h-[550px] w-full flex justify-center items-center md:py-[90px] md:h-screen md:w-full ">
        <div className="flex justify-center items-center  flex-col w-[90%] text-white md:w-[56%]">
        <div className="w-[60px] h-[5px] bg-white/30   md:w-80px mb-[20px]"></div>
        <h2 className='text-[30px] font-extrabold text-center md:text-[50px] '>LET`&apos;`S BUILD YOUR DREAMS!</h2>
        <p className='text-center my-[30px] text-[14.5px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        <button className='bg-[#FFBC01] text-white font-bold py-[15px] px-[50px]'>CONTACT US</button>
        </div>
        </div>
      
    </div>
  )
}

export default Contact
