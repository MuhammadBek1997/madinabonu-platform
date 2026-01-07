import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})


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
  }, [theme,user])


  document.getElementById("root").parentElement.setAttribute("data-theme",theme)

  return (
    <div id={theme} className='body'>
      <Sidebar />
      <Navbar theme={theme} openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} />
      <Routes>
        <Route path='/' element={<Home openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} user={user} name={name} surname={surname} setName={setName} setSurname={setSurname} setTheme={setTheme} theme={theme} saveInfo={saveInfo} />} />
        <Route path='/teachers' element={<Teachers user={user} />} />
        <Route path='/topStudents' element={<TopStudents />} />
      </Routes>
    </div>
  )
}

export default App
