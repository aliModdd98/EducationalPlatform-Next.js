import React from 'react'
import Header from '../../../../components/Header/Header'
import First_sec from './../../components/BodyPage/FirstSec/First-sec'
import {IoIosMusicalNotes} from 'react-icons/io'

import SecondSec from './../../components/BodyPage/SecondSec/SecondSec'
import ThirdSec from './../../components/BodyPage/ThirdSec/ThirdSec'

import FourthSec from './../../components/BodyPage/FourthSec/FourthSec'

import FifthSec from './../../components/BodyPage/FifthSec/FifthSec'
import SexSec from './../../components/BodyPage/SixSec/SexSec'
import SevenSec from './../../components/BodyPage/SevenSec/SevenSec'

import EighthSec from './../../components/BodyPage/Eighth/EighthSec'
import NinthSec from './../../components/BodyPage/NinthSec/NinthSec'
import currentInfoData from './../../../../Const/InfoTeacher.js'
import TenthSec from './../../components/BodyPage/TenthSec/TenthSec'
import Footer from './../../../../components/Footer/Footer'
import pricing from './../../../../Const/Pricing.js'
// import React, { useState, useEffect } from 'react';

function HomePage() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);


  
  

  return (
   <div>
      <Header pageName="WATCH THE VIDEO" desc="Education is the mother of Leadership" />
      <First_sec  /> 
        <SecondSec /> 
        <ThirdSec  subList={subList}/>
        <FourthSec />
         <FifthSec/>
         <SexSec/>
         <SevenSec SchoolNews={SchoolNews}/>
         <EighthSec pricing={pricing}/>
         <NinthSec data={currentInfoData}/>
         <TenthSec/>
      
       <Footer />
    </div>
  
  )
}

export default HomePage