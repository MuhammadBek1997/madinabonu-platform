import React from 'react'
import '../styles/Navbar.css'
import { Atom, BrainCircuit, Lightbulb,ChevronLeft, ChevronRight, Sun, Moon  } from 'lucide-react';
// App css import qilingan

const Navbar = ({ user, theme, openTheme, setOpenTheme, handleChangeTheme, setsToggle,sToggle }) => {
  return (
    <div className='navbar'>
      <div className="word-logo">
      
      {/* saidbarni ochuvchi btn  */}
      <button className='saidbar-btn' onClick={() => setsToggle(!sToggle)}>
          
      {!sToggle ? <ChevronLeft/>:<ChevronRight/>}
    </button>


  {/*navbardagilogo va mmadinabonu yozuvi   */}
          {/* <img src="/images/logotip.png" alt="logo" id='logotip' /> */}
          <img src={`/images/madinabonu${theme}.png`}alt="" id='logotip' />
        Madinabonu
      </div>
      <div className='nav-btns'>

        <div className={`theme-cont ${theme != "dark" ? "" : "theme-light"}`}>
          <button className='theme-toggle' onClick={()=>handleChangeTheme(()=>{
            return theme == "dark" ? "light" : "dark"
          })}>
            {theme == "dark" ? <Sun/> :  <Moon/> }
          </button>
        </div>

        {/* theme toggle */}
        {/* <button onClick={() => setOpenTheme(!openTheme)} className='darkMode-btn'>
          {theme == "dark" ? <Sun/> :  <Moon/> }
        </button> */}

        {/* theme menu */}
        {/* <div className='theme-menu' style={{
          display: openTheme ? "flex" : "none"
        }}>
          <button onClick={() => handleChangeTheme("dark")}>
            <Sun/>
          </button>
          <button onClick={() => handleChangeTheme("light")}>
           <Moon/>
          </button>
        </div> */}
        {/* end of theme menu */}



       


      </div>



    </div>

  
  )
}

export default Navbar
