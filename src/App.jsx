import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import LoginModal from './components/LoginModal'
import SingleCourse from './components/SingleCourse'

function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
  const [login,setLogin] = useState(false)


  const handleLogin = (username,password)=>{
    localStorage.setItem("user",JSON.stringify({username:username,password:password}))
    setLogin(false)
  }

  const handleLogout = ()=>{
    localStorage.removeItem("log")
  }

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  const [openTheme,setOpenTheme] = useState(false)
  const handleChangeTheme = (T) =>{
    setTheme(T)
    setOpenTheme(false)
  }


  const saveInfo = () => {
    setUser({ name: name, surname: surname })
  }
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("theme", theme)
    localStorage.setItem("log",true)
  }, [theme,user,login])


  let courses = [
    {
      id:11,
      name:"Ingliz tili",
      teacher:"Akmalkhon"
    },
    {
      id:12,
      name:"Ingliz tili",
      teacher:"Abdulaziz"
    },
    {
      id:13,
      name:"Turk tili",
      teacher:"Charos"
    },
    {
      id:14,
      name:"Turk tili",
      teacher:"Charos"
    },
    {
      id:15,
      name:"Turk tili",
      teacher:"Charos"
    },
    {
      id:16,
      name:"Turk tili",
      teacher:"Charos"
    },
    {
      id:17,
      name:"Turk tili",
      teacher:"Charos"
    },
  ]


  document.getElementById("root").parentElement.setAttribute("id",theme)

  return (
    <div id={theme} className='body'>
      {login ? <LoginModal handleLogin={handleLogin}/> : null}
      <Sidebar setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Home courses={courses} openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} user={user} name={name} surname={surname} setName={setName} setSurname={setSurname} setTheme={setTheme} theme={theme} saveInfo={saveInfo} />} />
        <Route path='/about' element={<About user={user} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course/:id' element={<SingleCourse courses={courses}/>} />
      </Routes>
    </div>
  )
}

export default App
