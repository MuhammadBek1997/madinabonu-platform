import React from 'react'
import '../styles/Navbar.css'
import { Atom, BrainCircuit, Lightbulb, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';
import { useGlobalContext } from '../Context';
// App css import qilingan

const Navbar = () => {


  let { user, theme, openTheme, setOpenTheme, handleChangeTheme, setsToggle, sToggle } = useGlobalContext()
  return (
    <div className="navbar-cont" style={{
      // paddingLeft:!sToggle ? "265px":"70px",
      

    }}>
    <div className='navbar'style={{
      minWidth:!sToggle ? "calc(99% - 297px)":"calc(99% - 103px)"
      }}>
      <div className="word-logo">
        <div className={`toggle ${!sToggle ? "active" : ""}`} onClick={() => setsToggle(!sToggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/*navbardagi logo va mmadinabonu yozuvi   */}
        <img src={`/images/madinabonu${theme}.png`} alt="" id='logotip' />
        Madinabonu
      </div>
      <div className='nav-btns'>
        <div className={`theme-cont ${theme != "dark" ? "" : "theme-light"}`}>
          <button className='theme-toggle' onClick={() => handleChangeTheme(() => {
            return theme == "dark" ? "light" : "dark"
          })}>

          </button>
        </div>
      </div>



    </div>
     </div>

  )
}

export default Navbar
