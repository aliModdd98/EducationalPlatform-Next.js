import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import First_sec from '@/components/main/components/BodyPage/FirstSec/First-sec'
import React from 'react'
import {GiMaterialsScience} from 'react-icons/gi'
import {MdBusinessCenter} from 'react-icons/md'
import {HiOutlineCalculator} from 'react-icons/hi'
import {BsPencil} from 'react-icons/bs'
import {FaCamera} from 'react-icons/fa'
import {VscGraphLine} from 'react-icons/vsc'
import {MdAnimation} from 'react-icons/md'
import {IoIosMusicalNotes}from 'react-icons/io'
import SecondSec from '@/components/main/components/BodyPage/SecondSec/SecondSec'
import ThirdSec from '@/components/main/components/BodyPage/ThirdSec/ThirdSec'
import {PiMathOperationsFill}  from 'react-icons/pi'
import {GiOpenBook} from 'react-icons/gi'
import {RxReader} from 'react-icons/rx'
import {GoHistory}from 'react-icons/go'
import {FaHeadphones} from 'react-icons/fa'
import FourthSec from '@/components/main/components/BodyPage/FourthSec/FourthSec'
import FifthSec from '@/components/main/components/BodyPage/FifthSec/FifthSec'
import SexSec from '@/components/main/components/BodyPage/SixSec/SexSec'
import SevenSec from '@/components/main/components/BodyPage/SevenSec/SevenSec'
import { SlCalender } from 'react-icons/sl'
import {BsFillPersonFill}from 'react-icons/bs'
import image1 from '@/assets/fimg.webp'
import image2 from '@/assets/simg.webp'
import EighthSec from '@/components/main/components/BodyPage/Eighth/EighthSec'
import NinthSec from '@/components/main/components/BodyPage/NinthSec/NinthSec'
import img1 from '@/assets/person3.jpeg'
import img2 from '@/assets//person2.jpeg'
import img3 from '@/assets/person1.jpeg'
import TenthSec from '@/components/main/components/BodyPage/TenthSec/TenthSec'
function index() {
 
  const category_list=[ 
    {
    title:"Science",
    numOfCources:"1,391 cources",
    icon:<GiMaterialsScience/> ,
  },{
    title:"Business",
    numOfCources:"3,234 cources",
    icon:<MdBusinessCenter/>,
  },{
    title:"Finance Accounting",
    numOfCources:"931 cources",
    icon:<HiOutlineCalculator/> 
  },{
    title:"Design",
    numOfCources:"7,291 cources",
    icon:<BsPencil/> 
  },{
    title:"Music",
    numOfCources:"9,114 cources",
    icon:<IoIosMusicalNotes/>
  },{
    title:"Marketing",
    numOfCources:"2,391 cources",
    icon:<VscGraphLine />
  },{
    title:"Photography",
    numOfCources:"7,991 cources",
    icon:<FaCamera/>
  },{
    title:"Animation",
    numOfCources:"6,491 cources",
    icon:<MdAnimation />
  }]

  const subList=[
    {
      icon:<IoIosMusicalNotes size={28}/>,
      title:"Music Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<PiMathOperationsFill size={28}/>,
      title:"Math Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<GiOpenBook size={28}/>,
      title:"English Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<RxReader size={28}/>,
      title:"Reading Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<GoHistory size={28}/>,
      title:"History Class",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },  {
      icon:<FaHeadphones size={28}/>,
      title:"Music ",
      desc:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts."
    },
  ]
  const SchoolNews=[
    {
      src:image1,
      title:"Education for Tomorrow's Leaders",
      icon1:<SlCalender size={12}/>,
      date:"June 22, 2020",
      icon2:<BsFillPersonFill size={12}/>,
      admin:"Admin",
      paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
      more:"Learn More"
    },
    {
      src:image2,
      title:"Enroll Your Kids This Summer to get 30% off",
      icon1:<SlCalender size={12}/>,
      date:"June 22, 2020",
      icon2:<BsFillPersonFill size={12}/>,
      admin:"Admin",
      paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
      more:"Learn More"
    }
    ]

    const pricing = [
      {
        title: "Starter",
        price: "$50.99",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        button: "GET STARTED"
      },
      {
        title: "Business",
        price: "$99.99",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        button: "GET STARTED"
      },
      {
        title: "Premium",
        price: "$199.99",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        button: "GET STARTED"
      }
    ];

    const currentInfoData = [
      {
        image: img1,
        name: "John Doe",
        position: "CEO, Founder"
      },
      {
        image: img2,
        name: "Ruby Mar",
        position: "Front-end Developer"
      },
      {
        image: img3,
        name: "Jan Kho",
        position: "Back-end Developer"
      }
    ];
    
  return (
    <>
     <Header pageName="Home" desc="Welcome to our website" />
     <First_sec category_list={category_list}/>
     <SecondSec/>
     <ThirdSec subList={subList}/>
     <FourthSec />
     <FifthSec/>
     <SexSec/>
     <SevenSec  SchoolNews={SchoolNews}/>
     <EighthSec pricing={pricing}/>
     <NinthSec data={currentInfoData}/>
     <TenthSec/>
     <Footer/>
    </>
  )
}

export default index