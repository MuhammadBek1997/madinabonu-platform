import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import { Home, User, Settings, Save } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="saidbarBtn-word" >
        <h3 className='tag'>
          Sahifalar
        </h3>
        {/* saidbar toggle */}
        <button onClick={() => setsToggle(!openTheme)}>
          Saidbar
        </button>
      </div>

      <div className='menus'>
        <Link to={'/'} className='menu'>
          Bosh sahifa 🏠
        </Link>
        <Link to={'/teachers'} className='menu'>
          Kurslar 👩‍💻
        </Link>
        <Link to={'/teachers'} className='menu'>
          Teachers 👩🏻‍🏫
        </Link>
        <Link to={'/topStudents'} className='menu'>
          Students 👨🏻‍🎓
        </Link>
      </div>
    </div>
  )
}

export default Sidebar