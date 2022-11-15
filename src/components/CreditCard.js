import './CreditCard.css'
import visa from '../assets/images/visa.png';



function CreditCard(props) {

  let {type, number,expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    let numArr = number.split('')

    numArr[0] = '*'
    numArr[1] = '*'
    numArr[2] = '*'
    numArr[3] = '*'
    numArr[4] = '*'
    numArr[5] = '*'
    numArr[6] = '*'
    numArr[7] = '*'
    numArr[8] = '*'
    numArr[9] = '*'
    numArr[10] = '*'
    numArr[11] = '*'

    numArr.join('')

    let img

    if (type === 'Visa'){
        img = visa
    }

 return (
   <div class='card-style' style={{backgroundColor: `${bgColor}` }}>

    <img class = 'imgStyle' src={img} alt='logo'/>
    <h1 style={{color: `${color}` }}>{numArr}</h1>
    <h3 style={{color: `${color}` }}>Expries {expirationMonth} / {expirationYear} {bank} </h3>
    <h3 style={{color: `${color}` }}>{owner}</h3>
   </div>
 )
}


export default CreditCard;