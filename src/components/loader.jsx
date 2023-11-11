import { Dna } from "react-loader-spinner"
import '../app/globals.css'
function Loader() {
  return (
    <div className='loader'>
       <div className="loading">
       <Dna 
    visible={true}
    height="200"
    width="250"
    ariaLabel="dna-loading"
    wrapperStyle={{
        
    }}
    wrapperClass="dna-wrapper"
  /></div>  </div>
     
  )
}

export default Loader