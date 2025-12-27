import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import { Home, User, Settings, Save } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='menus'>
        <Link to={'/'} className='menu'>
            Home
        </Link>
        <Link to={'/about'} className='menu'>
            About
        </Link>
        <Link to={'/contact'} className='menu'>
            Contact
        </Link>
        </div>
    </div>
  )
}

export default Sidebar