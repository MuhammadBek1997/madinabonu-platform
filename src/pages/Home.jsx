import { Save } from 'lucide-react'
import  { useState } from 'react'

const Home = () => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})

    const saveInfo = () =>{
        localStorage.setItem("user",JSON.stringify(user))
        setUser({name:name,surname:surname})
    }

  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} />
        <button onClick={saveInfo}>
            <Save/>
        </button>
        <h2>
            {user.name}
        </h2>
    </div>
  )
}

export default Home