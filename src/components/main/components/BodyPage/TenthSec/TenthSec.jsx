import './TenthSecStyle.css'
import {AiOutlinePlus} from 'react-icons/ai'
import choose from '@/assets/limg.jpeg'
import mini from '@/assets/mini.jpeg'
import Image from 'next/image'
function TenthSec() {
  return (
    <div className='tenth_sec'>
        <div className="container">
           <div data-aos="fade-right" className="img_left"><Image className='leftS' src={choose} alt='No Thing'/>

            </div> 
            <div data-aos="fade-left" className="right_Section">
<h2>Why Choose Us</h2>
<p>Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           <div className='feature'>- Good Teachers and Staffs</div>

           <div className="mini_sec">
            {/* <Image  className='img-final' src={mini} alt="NO thing" /> */}
            <Image src={mini} alt='no' className='img-final'/>
            <p>Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts. Seprated they live in Bookmarksgrove right at the coast of the Semantic, a large language ocean</p>
           </div>

           <div className="features"><div className='icon'><AiOutlinePlus size={12}/></div> We Vlue Good Characters</div>
           <div className="features"><div className='icon'><AiOutlinePlus size={12}/></div> Your Children are Safe</div>

            </div>
        </div>
    </div>
  )
}

export default TenthSec