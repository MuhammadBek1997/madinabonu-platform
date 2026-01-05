import { Save } from 'lucide-react'

const Home = ({user,theme,setTheme,setName,setSurname,name,surname,saveInfo}) => {
    
  return (
    <div>
        <div>
            <select name="" id="" value={theme} onChange={(e)=>setTheme(e.target.value)}>
                <option value="dark">
                    Dark
                </option>
                <option value="light">
                    Light
                </option>
            </select>
        </div>
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