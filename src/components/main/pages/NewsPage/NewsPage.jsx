import React from 'react'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import News from '../../components/News/News'
import image1 from './../../../../assets/fimg.webp'
import image2 from './../../../../assets/simg.webp'
import { SlCalender } from 'react-icons/sl'
import {BsFillPersonFill}from 'react-icons/bs'
function NewsPage() {
    const SchoolNews=[
        {
          src:image1,
          title:"Education for Tomorrow's Leaders",
          icon1:<SlCalender size={12}/>,
          date:"June 22, 2020",
          icon2:<BsFillPersonFill size={12}/>,
          admin:"Untree.co",
          paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
          more:"Learn More"
        },
        {
          src:image2,
          title:"Enroll Your Kids This Summer to get 30% off",
          icon1:<SlCalender size={12}/>,
          date:"June 22, 2020",
          icon2:<BsFillPersonFill size={12}/>,
          admin:"Untree.co",
          paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
          more:"Learn More"
        }, {
            src:image1,
            title:"Education for Tomorrow's Leaders",
            icon1:<SlCalender size={12}/>,
            date:"June 22, 2020",
            icon2:<BsFillPersonFill size={12}/>,
            admin:"Untree.co",
            paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
            more:"Learn More"
          },   {
            src:image2,
            title:"Enroll Your Kids This Summer to get 30% off",
            icon1:<SlCalender size={12}/>,
            date:"June 22, 2020",
            icon2:<BsFillPersonFill size={12}/>,
            admin:"Untree.co",
            paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
            more:"Learn More"
          }, {
            src:image1,
            title:"Education for Tomorrow's Leaders",
            icon1:<SlCalender size={12}/>,
            date:"June 22, 2020",
            icon2:<BsFillPersonFill size={12}/>,
            admin:"Untree.co",
            paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
            more:"Learn More"
          },   {
            src:image2,
            title:"Enroll Your Kids This Summer to get 30% off",
            icon1:<SlCalender size={12}/>,
            date:"June 22, 2020",
            icon2:<BsFillPersonFill size={12}/>,
            admin:"Untree.co",
            paragraph:"Far far away, behind the word mountains , far from the countries Vokalia and Consonantia, there live the blind texts.",
            more:"Learn More"
          },
        ]

            return (
    <div>
        <Header  pageName="WATCH THE VIDEO"  desc="Eduction is the mother of Leadership" />
        <News SchoolNews={SchoolNews}/>
    
        <Footer/>
    </div>
  )
}

export default NewsPage