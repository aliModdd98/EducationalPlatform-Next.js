import { useState } from 'react';
import './NewsStyle.css'
function News({SchoolNews}) {
  const [activeCircle, setActiveCircle] = useState(1);
  return (
    <div className="news">
    <div className="new_card">
      <div className="grid-container">
        {
        SchoolNews.map((e, index) =>
         activeCircle === 1 ? ( (
          <div
            className="card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 500}
          >
            <img src={e.src} />
            <div className="right_sec">
              <h4>{e.title}</h4>
              <div className="date_admin">
                <span className="icon">{e.icon1}</span>{" "}
                <span>{e.date}</span>
                <span className="icon">{e.icon2}</span>{" "}
                <span>{e.admin}</span>
              </div>
              <div className="paragraph">{e.paragraph}</div>
              <h4>{e.more}</h4>
            </div>
          </div>
        )): activeCircle === 2 ? (<>
        </>): (<></>)
      
         )
        }
      </div>
    </div>

    <div className="pagination">
        <div
          className={`circle ${activeCircle === 1 ? 'active' : ''}`}
          onClick={() => setActiveCircle(1)}
        >
          1
        </div>
        <div
          className={`circle ${activeCircle === 2 ? 'active' : ''}`}
          onClick={() => setActiveCircle(2)}
        >
          2
        </div>
        <div
          className={`circle ${activeCircle === 3 ? 'active' : ''}`}
          onClick={() => setActiveCircle(3)}
        >
          3
        </div>
      </div>
  </div>
  )
}

export default News