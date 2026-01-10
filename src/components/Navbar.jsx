import React from 'react'
import '../styles/Navbar.css'
import { Atom, BrainCircuit, Lightbulb,ChevronLeft, ChevronRight  } from 'lucide-react';
// App css import qilingan

const Navbar = ({ user, theme, openTheme, setOpenTheme, handleChangeTheme, setsToggle,sToggle }) => {
  return (
    <div className='navbar'>
      <div className="word-logo">
      
      {/* saidbarni ochuvchi btn  */}
      <button onClick={() => setsToggle(!sToggle)}>
          
      {!sToggle ? <ChevronLeft/>:<ChevronRight/>}
    </button>


  {/*navbardagilogo va mmadinabonu yozuvi   */}
          <img src="/images/saveb.png" alt="logo" id='logotip' />
        Madinabonu
      </div>
      <div className='nav-btns'>
        {/* theme toggle */}
        <button onClick={() => setOpenTheme(!openTheme)}>
          {theme == "dark" ? '🌙 Dark' : '☀️Light'}
        </button>

        {/* theme menu */}
        <div className='theme-menu' style={{
          display: openTheme ? "flex" : "none"
        }}>
          <button onClick={() => handleChangeTheme("dark")}>
            ☀️Light
          </button>
          <button onClick={() => handleChangeTheme("light")}>
            🌙 Dark
          </button>
        </div>
        {/* end of theme menu */}



       


      </div>



    </div>

  
  )
}

export default Navbar
