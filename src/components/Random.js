import './Random.css'

function Random(props) {

  let {min, max} = props

  let answer = Math.floor(Math.random()*max)

  if(answer < min){
    answer = answer + (min - answer)
  }

 return (
   <div class='random-style'>

    <h3>Random value between {min} and {max} = {answer}</h3>
      
   </div>
 )
}


export default Random;