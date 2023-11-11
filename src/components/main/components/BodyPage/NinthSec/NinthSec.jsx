import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeadPage from '../ThirdSec/HeadPage';
 import './NinthSecStyle.css'
import Image from 'next/image';
function NinthSec({ data }) {
  const titlePage = "Testimonils";
  const etc = "Seprated they live in Bookmarksgrove right at the coast of the Semantic, a large language ocean";
  const images = data.map(item => item.image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };
  useEffect(() => {
    setCurrentInfoData(data[currentImageIndex]);
  }, [currentImageIndex, data]);

  const [currentInfoData, setCurrentInfoData] = useState(data[currentImageIndex]);
  

  return (
    <div className="ninth_Sec">
      <HeadPage titlePage={titlePage} etc={etc} />
      <div className="circle" data-aos="fade-right">
        <Image src={currentInfoData.image}
          alt="Circle Image"
          className="circle-image"
        />
      </div>



      <div className="info" data-aos="fade-left">
        <h2>{currentInfoData.name}</h2>
        <p>{currentInfoData.position}</p>
      </div>
      <div className="dots" >
        {images.map((image, index) => (
          <span
            key={index}
            className={currentImageIndex === index ? 'active' : ''}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
     


    </div>
  );
}

export default NinthSec;