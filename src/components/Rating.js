import './Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'



function Rating(props) {

  let {children} = props
  let childrenNum = Math.round(children)
  
 return (
   <div>
    {childrenNum < 1 &&  [<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {childrenNum === 1 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {childrenNum === 2 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {childrenNum === 3 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {childrenNum === 4 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={farStar}/>]}
    {childrenNum === 5 && [<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>,<FontAwesomeIcon icon={faStar}/>]}
       
   </div>
 )
}

export default Rating;
