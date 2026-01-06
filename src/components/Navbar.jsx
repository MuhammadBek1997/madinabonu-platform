import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="word-logo">
        <div className="nav-logo">
          <img src="/images/saveb.png" alt="logo" id='logotip' />
        </div>
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
            🌙 Dark
          </button>
          <button onClick={() => handleChangeTheme("light")}>
            ☀️Light
          </button>
        </div>
        {/* end of theme menu */}

      </div>
    </div>
  )
}

export default Navbar
