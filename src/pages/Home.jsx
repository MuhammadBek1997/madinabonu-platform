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
       
    </div>
  )
}

export default Home