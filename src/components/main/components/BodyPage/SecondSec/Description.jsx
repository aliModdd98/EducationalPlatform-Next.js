import './SecondSecStyle.css'
import {BsCheckLg} from 'react-icons/bs'

import 'aos/dist/aos.css';

function Description({title}) {
  return (
    
<div data-aos="fade-down-left">



 <div className="left-sec">
 <h2>{title}</h2>
<div className='paragraph'>Far far away ,behind the word mountains,far
from the countries Vokalia and Consonantia,
  there live the blind texts .Separated they live.
  <h5 className='par'><BsCheckLg className='correct' size={20}/> Behind the word Mountains</h5>
  <h5 className='par'><BsCheckLg  className='correct' size={20}/> Far far away Mountains</h5>
  <h5 className='par'><BsCheckLg  className='correct' size={20}/> Large language Ocean</h5>
  
</div>

  </div>  
  </div>
  )
}

export default Description