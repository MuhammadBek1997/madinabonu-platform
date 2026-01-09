import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({setLogin}) => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-evenly",
    }}>
      <div>
        <Link to={'/'}>
            Home
        </Link>
        <Link to={'/about'}>
            About
        </Link>
        <Link to={'/contact'}>
            Contact
        </Link>
      </div>
      <div>
        <button onClick={()=>setLogin(true)}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Sidebar