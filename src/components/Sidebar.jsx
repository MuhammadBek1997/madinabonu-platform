import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import { Home, User, Settings, Save } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='menus'>
        <Link to={'/'} className='menu'>
           Bosh sahifa🏠
        </Link>
        <Link to={'/about'} className='menu'>
        Kurslar 👩‍💻
        </Link>
        <Link to={'/contact'} className='menu'>
           Loyigalar🧮
        </Link>
        </div>
    </div>
  )
}

export default Sidebar