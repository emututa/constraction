import React, {ReactElement} from 'react'
interface IconsProps{
    Icon: ReactElement
    bg:string 
}

const Icons:React.FC<IconsProps> = ({Icon,bg}) => {
  return (
    <div className={`${bg} mr-[10px] p-[10px] rounded-[20px] `}>
      {Icon}
    </div>
  )
}

export default Icons