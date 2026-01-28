import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'
import { Home, ChevronLeft, ChevronRight, GraduationCap, } from 'lucide-react'
import { useGlobalContext } from '../Context';

const Sidebar = () => {

  let { setsToggle, sToggle, theme } = useGlobalContext()
  return (
    <div className={`sidebar ${sToggle ? "sidebar-open" : ""}`}>
      <div className="saidbarBtn-word" >
        <h3 className='tag'>
          {sToggle ? "" : "  Sahifalar "}

        </h3>
        {/* saidbar toggle */}
        {/* <button className='saidbarBtn' onClick={() => setsToggle(!sToggle)}>
          {!sToggle ? <ChevronLeft /> : <ChevronRight />}
        </button> */}
        <div className={`toggle ${!sToggle ? "active":""}`} onClick={()=>setsToggle(!sToggle)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>

      <div className='menus'>
        <Link to={'/'} className='menu '>
          <Home /> {sToggle ? "" : " Bosh sahifa "}
        </Link>
        <Link to={'/topStudents'} className='menu'>
          <GraduationCap /> {sToggle ? "" : " Kurslar "}
        </Link>
        <Link to={'/teachers'} className='menu'>
          <img src={`/images/teach${theme}.png`} alt="" className='sidebar-icon' />
          {sToggle ? "" : " O'qituvchilar "}
        </Link>
        <Link to={'/topStudents'} className='menu'>
          <img src={`/images/bola${theme}.png`} alt="" className='sidebar-icon' /> {sToggle ? "" : " Top o'quvchilar "}
        </Link>
      </div>
    </div>
  )
}

export default Sidebar