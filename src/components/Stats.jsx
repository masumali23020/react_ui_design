import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
 <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {stats.map((stat) => (
    <div key={stat.id} className='flex-1 flex m-3 justify-start items-center flex-row ' >
      <h1 className='text-white font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px]'>{stat.value}</h1>
      <p className='text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[3ppx] leading-[23px]'>{stat.title} </p>

    </div>
  ))}
 </section>
)

export default Stats