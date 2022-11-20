import React, { useState } from 'react';
import { NavBar, NavLink, Nav, NavW } from './styles';
import { Link } from 'react-scroll';

function NavDnd({ open }){
  const [colorChange, setColorchange] = useState(false);


  window.onscroll = () => {

    console.log(window.scrollY);
  if (((document.body.scrollTop > 879) && (window.scrollY < 2248) ) || ((document.documentElement.scrollTop > 879) && (window.scrollY < 2248))){
    setColorchange(true);
  } 
 else{
      setColorchange(false);
    }
  if (((document.body.scrollTop > 2100) && (window.scrollY < 2107)) || ((document.documentElement.scrollTop > 2100) && (window.scrollY < 2107)))
    setColorchange(true);
  

}
  return(
    colorChange ?
      <NavBar open={open}>   
        <NavLink><Link to='home' smooth={true}><NavW name='nav'>Inicio</NavW></Link></NavLink>
        <NavLink><Link to='about' smooth={true}><NavW name='nav'>Sobre</NavW></Link></NavLink>
        <NavLink><Link to='blog' smooth={true}><NavW name='nav'>Blog</NavW></Link></NavLink>
        <NavLink><Link to='contact' smooth={true}><NavW name='nav'>Contato</NavW></Link></NavLink>
      </NavBar>
      :
      <NavBar open={open}>   
        <NavLink><Link to='home' smooth={true}><Nav name='nav'>Inicio</Nav></Link></NavLink>
        <NavLink><Link to='about' smooth={true}><Nav name='nav'>Sobre</Nav></Link></NavLink>
        <NavLink><Link to='blog' smooth={true}><Nav name='nav'>Blog</Nav></Link></NavLink>
        <NavLink><Link to='contact' smooth={true}><Nav name='nav'>Contato</Nav></Link></NavLink>
      </NavBar>
  );
}

export default NavDnd;