import './Greeting.css'

function Greeting(props) {

  let {lang, children} = props
  
 return (
   <div class='greeting-style'>

{/* THIS WORKS AS AN IF STATEMENT */}

    {lang === "de" && 'Hallo '}
    {lang === "en" && 'Hello '}
    {lang === "fr" && 'Bonjour '}
    {lang === "es" && 'Que onda '}
    {children}
    
{/* CHILDREN REPRESENTS THE NAME YOU MENTION ON APP.JS AND ITS CHILDRE BECASU IST THE CHILDREN ELEMENT */}
      
   </div>
 )
}


export default Greeting;


