import React from 'react'
import styles from '../style'

const FeatureCard = ({index, icon, title, content}) => (
    <div className={`flex flex-row p-6 rounded-[20px] `}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className='w-[50%] h-[50%] object-contain' />
        </div>

        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='text-[18px] font-semibold text-white font-poppins leading-[23.4px] mb-1 '>
                {title}
            </h4>
            <p className='text-[16px] font-poppins font-normal text-dimWhite leading-[24px] '>
                {content}
            </p>

        </div>
    </div>


)

export default FeatureCard