import './ThirdSecStyle.css'

function HeadPage({titlePage,etc}) {
  return (
   
    <div data-aos="zoom-in">
   <div className="third-title">
    <h2>{titlePage}</h2>
    <div className="para">Far far away, behind the word mountains , far from the countries Vokalia and
    Consonantia, there live the blind texts.{etc}</div>
</div></div>
  )
}

export default HeadPage