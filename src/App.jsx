import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LoginModal from './components/LoginModal'
import SingleCourse from './components/SingleCourse'
import { useGlobalContext } from './Context'

function App() {
  let {theme,login} = useGlobalContext()
  
  document.getElementById("root").parentElement.setAttribute("id",theme)

  return (
    <div id={theme} className='body'>
      {login ? <LoginModal/> : null}
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course/:id' element={<SingleCourse/>} />
      </Routes>
    </div>
  )
}

export default App
