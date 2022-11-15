import './BoxColor.css'

function BoxColor(props) {

  let {r, g, b} = props


 return (
   <div class='Box-style' style={{backgroundColor: `rgb(${r}, ${g}, ${b})` }}>

    <h3>rgb{r},{g},{b}</h3>
      
   </div>
 )
}


export default BoxColor;