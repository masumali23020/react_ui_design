import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer  `}> 
    <div className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] rounded-full flex-col `}>
   <div className={`${styles.flexStart} flex-row`}>
   <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
       <span className='text-gradient'> Get </span>
      </p>
      <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
   </div>
   <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
    <span className='text-gradient'>Started</span>
   </p>

    </div>
  
     </div>
  )
}

export default GetStarted