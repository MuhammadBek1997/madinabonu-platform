import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  const saveInfo = () => {
    setUser({ name: name, surname: surname })
  }
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("theme", theme)
  }, [theme,user])


  document.getElementById("root").parentElement.setAttribute("id",theme)

  return (
    <div id={theme} className='body'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home user={user} name={name} surname={surname} setName={setName} setSurname={setSurname} setTheme={setTheme} theme={theme} saveInfo={saveInfo} />} />
        <Route path='/about' element={<About user={user} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
