import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function Card({ cources }) {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="cources">
      {cources.map((e, index) => (
        <div
          className="card"
          key={index}
          id={`card-${index}`}
          data-aos="fade-left"
          data-aos-delay={index * 1000}
          data-aos-duration="1000"
        >
          <div className="image">
            <Image src={e.src} alt="no" />
          </div>
          <div className="title">
            <div className="f1">
              <span>{e.icon1}</span>
              <h5>{e.num}</h5>
            </div>
            <div className="rate">
              <span>{e.icon2}</span>
              {e.rate}
            </div>
          </div>
          <div className="desc">
            <h3>{e.title}</h3>
            {e.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;