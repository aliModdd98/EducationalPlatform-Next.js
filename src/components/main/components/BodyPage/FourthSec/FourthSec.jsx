import Card from './Card'
import './FourthSecStyle.css';
import './Card.jsx';
import {AiFillStar} from 'react-icons/ai'
import {GiOpenBook} from 'react-icons/gi'
import img1 from '@/assets/5.webp'
import img2 from '@/assets/1.webp'
import img3 from '@/assets/4.webp'
import HeadPage from '../ThirdSec/HeadPage';
import { Container } from 'react-bootstrap';
function FourthSec({}) {
  const cources=[
    {
      src:img1,
     icon1:<GiOpenBook/>,
     num:" 43 lesson",
     icon2:<AiFillStar/>,
     rate:4.8,
     title:"Education Program Title",
     desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, soluta esse suscipit officia obcaecati nemo iure nisi voluptates assumenda."
    }, 
    {src:img2,
    icon1:<GiOpenBook/>,
    num:" 43 lesson",
    icon2:<AiFillStar/>,
    rate:4.8,
    title:"Education Program Title",
    desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, soluta esse suscipit officia obcaecati nemo iure nisi voluptates assumenda."
   }, {src:img3,
   icon1:<GiOpenBook/>,
   num:" 43 lesson",
   icon2:<AiFillStar/>,
   rate:4.8,
   title:"Education Program Title",
   desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, soluta esse suscipit officia obcaecati nemo iure nisi voluptates assumenda."
  }
  ]

const titlePage="The Right Cource For You"
  return (
    <Container>
    <div className='fourth-container'>

<HeadPage titlePage={titlePage}/>
   <Card cources={cources}/>
    </div>  
    </Container>
  )
}

export default FourthSec