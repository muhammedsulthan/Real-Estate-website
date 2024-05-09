import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickedHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened,setMenuOpend]=useState(false)
  const getMenuStyles=(menuOpened)=>{
    if (document.documentElement.clientWidth <= 800) {
      return{
        right:!menuOpened && "-100%"
      }
    }
  }
  return (
   
    <section className="h-wrapper">

        <div className='flexCenter paddings innerwidth h-container'>
          {/* <img src="./logo.png" alt="logo" width={100} /> */}
          <h1>&ULTHAN'S </h1>

          <OutsideClickedHandler onOutsideClick={()=>{
            setMenuOpend(false)
          }}>        

          <div className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}>
            <a href="#rescidenies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#get-started">Get started</a>
            <button className='button'>
            <a href="mailto:muhammedsulthanziz@gmail.com">Contact</a>
            </button>
          </div>
          </OutsideClickedHandler>        
          <div className='menu-icon' onClick={()=>setMenuOpend((prev)=>!prev)}>
           <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>

  )
}

export default Header
