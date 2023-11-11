import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Loader from '../components/loader';
import '../app/globals.css'
import bgimage from '../assets/home.webp';
import main from '../assets/main.webp'
import cources from '../assets/cources.webp'
import teachers from '../assets/teachers.webp'
import students from '../assets/students.webp'

import MainLayouts from '@/MainLayout/mainLayout';
function LandingPage() {

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const name = 'Welcome';

  if (isLoading) {
    return <Loader />;
  }

  return (
  
   <div className="home">
     
   
         <div className="MainContainer">
         <div className="mainImage">
           <Image className="MainImag" src={bgimage} alt="img" width={500} height={500} />
         </div>
         <div className="titlePage">
           <motion.h1 className="name">
             {name.split('').map((letter, index) => (
               <motion.span
                 key={index}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.2, delay: index * 0.4 }}
               >
                 {letter}
               </motion.span>
             ))}
           </motion.h1>
           <h4>Online Education</h4>
         </div>
         <div className="sectionPlatform">
           <div className="sectionp">
             <Image className="imgsec" src={main} alt="img" width={200} height={200} />
             <h2>Home</h2>
             <div className="iconss">
               <a onClick={() => router.push('/main')}>
                 <BsArrowRightCircleFill size={32} />
               </a>
             </div>
           </div>
           <div className="sectionp">
             <Image className="imgsec" src={cources} alt="img" width={200} height={200} />
             <h2>Courses</h2>
             <div className="iconss">
               <a onClick={() => router.push('/Courses')}>
                 <BsArrowRightCircleFill size={32} />
               </a>
             </div>
           </div>
           <div className="sectionp">
             <Image className="imgsec" src={teachers} alt="img" width={200} height={200} />
             <h2>Teachers</h2>
             <div className="iconss">
               <a onClick={() => router.push('/Teachers')}>
                 <BsArrowRightCircleFill size={32} />
               </a>
             </div>
           </div>
           <div className="sectionp">
             <Image className="imgsec" src={students} alt="img" width={200} height={200} />
             <h2>Students</h2>
             <div className="iconss">
               <a onClick={() => router.push('/Students')}>
                 <BsArrowRightCircleFill size={40} />
               </a>
             </div>
           </div>
          
         </div>
       </div>
    
     



    </div>
  );
}

export default LandingPage;