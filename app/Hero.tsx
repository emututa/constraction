import React from 'react'
import NavBar from './components/Navbar/NavBar'
// import Services from './components/Services/Services'
// import About from './About/About'
// import HappyClients from './Testmonials/HappyClients'
// import Project from './components/Project/Project'

const Hero = () => {
  return (
    
      <div className="bg-cover bg-center h-[720px] w-full md:h-[140vh]"style={{ backgroundImage: "url('/imgs/banner.png')" }}>
      <div className="bg-blue-800/50 w-[100%] h-[720px] md:h-[140vh]">
       <NavBar/>

       <div className="flex-col mt-[70px] mx-[8px] justify-center items-center flex md:items-start md:mx-[120px] md:mt-[150px] ">
          <p className="font-extrabold mb-[20px] text-white">CONSTRACTION SERVICES</p>
          <div className="w-[90px] h-[5px] bg-white/60 mb-[10px] "></div>
          <h1 className="text-[33px] text-center font-extrabold text-white md:text-[80px] md:text-start">BUILDING YOUR <br /> DREAMS</h1>
          <button className="bg-[#FFBC01] px-[35px] py-[10px] mt-[30px] font-bold text-white md:mb-[120px] md:p-[15px] md:px-[50px]">GET A QUOTE</button>
        </div>
 
        </div>

      </div>  

    
    

  
  )
}

export default Hero
