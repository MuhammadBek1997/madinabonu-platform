import React, { useState } from 'react'

const LoginModal = ({handleLogin}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className='login'>
        <div className="login-cont">
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={()=>handleLogin(username,password)}>
                Login
            </button>
        </div>
    </div>
  )
}

export default LoginModal