import SecondSec from '../../components/BodyPage/SecondSec/SecondSec'
import teacher1 from './../../../../assets/teacher1.webp'
import teacher2 from './../../../../assets/teacher2.webp'
import teacher3 from './../../../../assets/teacher3.webp'
import facebook from './../../../../assets/facebook.png'
import lin from './../../../../assets/linkedin.png'
import tw from './../../../../assets/twitter.png'
import OurTeam from '../../components/BodyPage/OurTeam/OurTeam'
import Header from './../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import ThirdSec from '../../components/BodyPage/ThirdSec/ThirdSec'
import {IoIosMusicalNotes} from 'react-icons/io'
import {PiMathOperationsFill}  from 'react-icons/pi'
import {GiOpenBook} from 'react-icons/gi'
import {RxReader} from 'react-icons/rx'
import {GoHistory}from 'react-icons/go'
import {FaHeadphones} from 'react-icons/fa'
import TenthSec from '../../components/BodyPage/TenthSec/TenthSec'
function About() {
  
const teachers=[
    {
        src:teacher1,
        name:"Min Collins",
        type:"Teacher in Math",
        Description:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
        facebook:facebook,
        twitter:tw,
        linked:lin
    },{
        src:teacher2,
        name:"Anderson Matthew",
        type:"Teacher in Music",
        Description:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
        facebook:facebook,
        twitter:tw,
        linked:lin
    },{
        src:teacher3,
        name:"Cynthia Misso",
        type:"English Teacher",
        Description:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
        facebook:facebook,
        twitter:tw,
        linked:lin,
    }
]

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

    return (
    <div>
<Header pageName="About Us"  desc="Another free template by Untree.co. Far far away,
behind the word mountains, far from the countries 
Vokalia and Consonantia , there live ."/>
<SecondSec />
<OurTeam teachers={teachers}/>
<ThirdSec  subList={subList} />
<TenthSec/>
<Footer />
    </div>
  )
}

export default About