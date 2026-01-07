import { Save } from 'lucide-react'

const Home = ({theme,openTheme,setOpenTheme,handleChangeTheme,courses}) => {
    
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
        
        {/* Kurslar ro'yhati */}
        <div className='course-list'>
            {
                courses.map((item,index)=>{
                    return(
                        <div className='course-card' key={index}>
                            <h2>
                                {item.name}
                            </h2>
                            <h1>
                                {item.teacher}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home