import React, { useRef } from 'react'
import "./Navbar.css";
import open_menu from "../assets/menu_open.webp";
import close_menu from "../assets/close_menu.webp"



function Navbar() {
    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right="0"
    }
    const closeMenu =()=>{
        menuRef.current.style.right="-350px"
    }
  return (
    <div className='navbar'>
      <h2>Karthick kumar</h2>
       <img src={open_menu} alt="open_menu"  className='.nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={close_menu} alt=" close_menu"  className='.nav-mob-close' onClick={closeMenu}/>
        <li> <a href="#about" smooth>About me</a></li>
        <li><a href="#education" smooth>Education</a></li>
        <li><a href="#skill" smooth>Skills</a></li>
        <li> <a href="#project" smooth>Project</a></li>
        <li><a href="#intership" smooth>Internship</a></li>
       
        <li><a href="#certificate" smooth>Certificate</a></li>
        <li> <a href="#contact" smooth>Contact</a></li>
       

      
      </ul>
    </div>
  )
}

export default Navbar
