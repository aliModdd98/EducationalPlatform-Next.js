
import HeadPage from '../ThirdSec/HeadPage';
import './EighthSecStyle.css'


import 'aos/dist/aos.css';
import useAOS from '@/hooks/useAOS';
function EighthSec({pricing}) {
 const title="Pricing";

 useAOS();
 
 return (
    <div className='eighth-sec'>
        <HeadPage titlePage={title}/>
    
    <div className="pricing">{
pricing.map((e,index)=>(
<div className="itemPrice" key={index}
data-aos="zoom-in-up"
data-aos-delay={index * 1000}
>
<h2>{e.title}</h2>
    <div className="row"><h2>{e.price}</h2>/month</div>
<p>
    {e.paragraph}
</p>
<button>{e.button}</button>

</div>

))

    }
    
    </div>
    </div>
  )
}

export default EighthSec