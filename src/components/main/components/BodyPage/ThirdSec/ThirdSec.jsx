import HeadPage from './HeadPage.jsx'
import './ThirdSecStyle.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function ThirdSec({subList}) {


 const titlePage="We Have Best Education"
 
  useEffect(() => {
    AOS.init();
    const subItems = document.querySelectorAll('.aos-item');

    subItems.forEach((item, index) => {
      const delay = (index + 1) * 1000;
      setTimeout(() => {
        item.classList.add('aos-animate');
      }, delay);
    });
  }, []);
 
 return (
    <div className='third-sec'>
           
           <HeadPage titlePage={titlePage} />

           
<div className="sub-grid">
    {
    subList.map((e, index) => (
        <div className="sub-item aos-item" key={index} data-aos="fade-left">
         <div className="circle">
         <span>{e.icon}</span> </div> 
          <h3>{e.title}</h3>
          <p>{e.desc}</p>
        </div>
      ))
    }
</div>
    </div>
  )
}

export default ThirdSec