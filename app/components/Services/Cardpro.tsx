
import Image,{StaticImageData} from "next/image"
import { IconType } from "react-icons"
import Link from "next/link"



interface f_cardsprops{
    image : string | StaticImageData
    sub_h : string
    slash : string
    sub_t : string
    add   : IconType
}


const Cardpro = ({image, sub_h,slash,sub_t, add:Icon}:f_cardsprops) => {
  return (

    
    <div className="bg-white w-[85%] px-[20px]  border-gray-200 border-b-0 hover:bg-[#F6F6F6] md:w-[27%]  ">
    <Image src={image} alt="card_image" width={300} height={300} className="mt-[20px] md:mt-[0px]" />
    <h3 className="text-[#0E3998] font-bold text-[20px]">{sub_h}</h3>
    <p >{slash}</p>
    <p className="my-[20px]">{sub_t}</p>
    <Link href="/"> 
    <Icon size={15} className="text-[#0E3998] mb-[40px] md:mb-[60px] "/>
    </Link>
    </div>
  

  )
}

export default Cardpro
