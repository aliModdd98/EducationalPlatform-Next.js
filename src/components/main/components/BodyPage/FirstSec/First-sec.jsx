import './First-secStyle.css';

function First_sec({category_list}) {
 
  return (
   
   
   
  <div className='container'  data-aos="zoom-in-up">
      <h3>Browse Top Category</h3>
      <div className="category">
        {category_list?.map((e, index) => (
          <div className="item-grid" key={index}>
    <div className='left'> {e.icon}</div>
           <h5>{e.title}</h5>
            <h5>{e.numOfCources}</h5>
           </div>
        
        ))}
      </div>
     <div className="final"><p>We have more category here . <span>Browse all</span></p></div> 
    </div>
  )
}

export default First_sec