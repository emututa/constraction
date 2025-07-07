
// import { FaSnowflake,FaFacebook, FaTwitter,FaHome } from 'react-icons/fa'
import Cardpro from './Cardpro'
import { FaPlus } from 'react-icons/fa'
import OrangeCard from './OrangeCard'


const Services = () => {
  return (
    

    <div className=" flex flex-wrap flex-col justify-center items-center gap-0.5 md:flex-wrap md:flex-row md:h-[120vh]">

        <OrangeCard/>

            <Cardpro
            image  = "/imgs/man.png"
             sub_h = "GENERAL CONTRACT"
             slash = "//////////////////////////////"
             sub_t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
             add   = {FaPlus}
            />


            <Cardpro
            image  = "/imgs/team.png"
             sub_h = "PROJECT PLANNING"
             slash = "/////////////////"
             sub_t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
             add   = {FaPlus}
            />


            <Cardpro
            image  = "/imgs/man.png"
             sub_h = " HOUSE REFURBISHMENT"
             slash = "/////////////////"
             sub_t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
             add   = {FaPlus}
            />


            <Cardpro
            image  = "/imgs/table.png"
             sub_h = "KITCHEN REMODELING"
             slash = "/////////////////"
             sub_t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
             add   = {FaPlus}
            />


            <Cardpro
            image  = "/imgs/house.png"
             sub_h = "HOUSE EXTENSIONS"
             slash = "/////////////////"
             sub_t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
             add   = {FaPlus}
            />

          </div>
  
  )
}

export default Services
