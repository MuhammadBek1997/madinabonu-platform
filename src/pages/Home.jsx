import { Save } from 'lucide-react'

const Home = ({user,theme,setTheme,setName,setSurname,name,surname,saveInfo,openTheme,setOpenTheme,handleChangeTheme}) => {
    
  return (
    <div>
        <div>
            <button onClick={()=>setOpenTheme(!openTheme)}>
                {theme == "dark" ? '🌙 Dark':'☀️Light'}
            </button>
            <div className='theme-menu' style={{
                display:openTheme?"flex":"none"
            }}>
                <button onClick={()=>handleChangeTheme("dark")}>
                    🌙 Dark
                </button>
                <button onClick={()=>handleChangeTheme("light")}>
                    ☀️Light
                </button>
            </div>
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