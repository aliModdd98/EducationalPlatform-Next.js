import React from 'react'
import Description from '@/components/main/components/BodyPage/SecondSec/Description'
import child from '@/assets/child.webp'
import './SixSecStyle.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

function SexSec() {
 
 
     const title1="About Us"
    return (
    
    <div className='sec-container six_container'>

   <Description title={title1}/>
<div className="grid_sec">
    <div className="one">
      <span>204+</span><p>No. Students</p></div>
    <div className="two">
      <span>0</span><p>No. Teachers</p></div>
    <div className="thre">
      <span>0</span><p>No. Awards</p></div>
</div>

    <div className="image_flow">
     <div className="square"></div>
      <Image className='cardImage' src={child} alt='children ' /></div>   
<div className="buttons">
  <button className='btn_one'>ADMISSION</button>
  <button className='btn_two'>Learn More</button>
</div>
    </div>
  )
}

export default SexSec