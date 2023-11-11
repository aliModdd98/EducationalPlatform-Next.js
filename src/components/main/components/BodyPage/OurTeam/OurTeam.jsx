import React from 'react'
import HeadPage from '../ThirdSec/HeadPage'
import './OurTeamStyle.css'

import 'aos/dist/aos.css';
function OurTeam({teachers}) {
 
    return (
    <div className='ourTeam'>

<HeadPage titlePage="Our Team "/>

    <div className="cards">{
      teachers.map((e,index)=>(  

   <div className='card' key={index}    id={`card-${index}`}
   data-aos="fade-right"
   data-aos-delay={index * 1000}
   data-aos-duration="1000">
   
   <div className="teacher-image">
    <img  src={e.src} alt='Teachers '/></div>
    <div className="details">
       <h4>{e.name}</h4>
       <h6>{e.type}</h6>
       <p>{e.Description}</p>
       <div className="socials">
           <span className='icon'><img src={e.facebook} alt="icon" /></span>
           <span className='icon'><img src={e.twitter}alt="icon" /></span>
           <span className='icon'><img src={e.linked} alt="icon" /></span>
       </div>
   </div></div>
))
    }
       
</div>

    

   
    </div>
  )
}

export default OurTeam