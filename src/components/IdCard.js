import './IdCard.css'

function IdCard(props) {

  const person = props.card
  
  
 return (
   <div class='id-card card-flex'>
       <img class='imgSize' src = {person.picture} alt="profile"/>
       <section>
       <h3>LastName: {person.lastName}</h3>
       <h3>FirstName: {person.firstName}</h3>
       <h3>Gender: {person.gender}</h3>
       <h3>Height: {person.height}</h3>
       {<h3>Birth: {person.birth.toISOString()}</h3>}
       </section>
   </div>
 )
}


export default IdCard;


