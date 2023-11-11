import HeadPage from '../ThirdSec/HeadPage'
import './SevenSecStyle.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
function SevenSec({SchoolNews}) {
  const titlePage="School News"
  
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  
  return (
    <div className='seven_sec'>
<HeadPage  titlePage={titlePage}/>

<div className="new_card">
{   SchoolNews.map((e,index)=>(
 <div  className="card"
 key={index}
 data-aos="zoom-in-up"
 data-aos-delay={index * 1000}> 
<Image src={e.src}/>
<div className="right_sec">
<h4>{e.title}</h4>
<div className="date_admin">
 <span className="icon">{e.icon1}</span> <span>{e.date}</span>
 <span className="icon">{e.icon2}</span> <span>{e.admin}</span>
</div>
<div className="paragraph">
  {e.paragraph}
</div>
<h4>{e.more}</h4>
   </div>
   
   
   </div>
))

}
</div>
    </div>
  )
}

export default SevenSec