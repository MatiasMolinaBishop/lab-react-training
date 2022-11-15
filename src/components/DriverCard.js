import './DriverCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'



function DriverCard(props) {

  let {name, rating, img, car} = props
  let ratingRounded = Math.round(rating)
  
 return (
   <div class='dcardFlex color'>

    <img class ='imgStyleDriver' src={img} alt ='drivePhoto' />

    <section>
    <h5>{name}</h5>
    {ratingRounded < 1 &&  [<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {ratingRounded === 1 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {ratingRounded === 2 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {ratingRounded === 3 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {ratingRounded=== 4 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {ratingRounded === 5 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>]}
    <h5>{car.model} - {car.licensePlate}</h5>
    </section>
       
   </div>
 )
}

export default DriverCard;
