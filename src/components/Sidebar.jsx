import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import { Home, User, Settings, Save, ChevronLeft, ChevronRight } from 'lucide-react'

const Sidebar = ({setsToggle,sToggle}) => {
  return (
    <div className={`sidebar ${sToggle ? "sidebar-open":""}`}>
      <div className="saidbarBtn-word" >
        <h3 className='tag'>
        {sToggle ? "":"  Sahifalar "}
        
        </h3>
        {/* saidbar toggle */}
        <button className='saidbarBtn'  onClick={() => setsToggle(!sToggle)}>
          
          {!sToggle ? <ChevronLeft/>:<ChevronRight/>}
        </button>
      </div>

      <div className='menus'>
        <Link to={'/'} className='menu '>
         {sToggle ? "":" Bosh sahifa "}🏠
        </Link>
        <Link to={'/teachers'} className='menu'>
        {sToggle ? "":" Kurslar "} 👩‍💻
        </Link>
        <Link to={'/teachers'} className='menu'>
        {sToggle ? "":" O'qituvchilar "}👩🏻‍🏫
        </Link>
        <Link to={'/topStudents'} className='menu'>
        {sToggle ? "":" Top o'quvchilar "}👨🏻‍🎓
        </Link>
      </div>
    </div>
  )
}

export default Sidebar