import React from 'react'
import { Link } from "react-router-dom";


export default function NavBar() {
    let logo='../image/logo.png'
  return (
<div className='contentNavBar'> 
<div className='contentNav'>
    <img className='logoNav' src={require('../image/logo.png')}/>
    <div className='contentMenu'>
    <Link className="link" to="/SobreNosotros">NOSOTROS</Link>
    <Link className="link" to="/Contacto">CONTACTO</Link>
    </div>
</div>

</div>
)

}
