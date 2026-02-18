import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Teachers from './pages/Teachers'
import TopStudents from './pages/TopStudents'
import SingleTeachers from './components/SingleTeachers'
import { useGlobalContext } from './Context'
import Courses from './pages/Courses'
import SingleStudents from './components/SingleStudents'

function App() {
  
  let {theme,login,sToggle} = useGlobalContext()


 
    
   

  

  document.getElementById("root").parentElement.setAttribute("data-theme",theme)

  return (
    <div id={theme} className='body'>
      <Sidebar />
      <section  style={{
        paddingLeft:!sToggle ? "265px":"70px"
      }}>

     
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/teachers' element={<Teachers/>} />
        <Route path='/topStudents' element={<TopStudents/>} />
        <Route path='/teachersSingle/:id' element={<SingleTeachers/>} />
        <Route path='/studentsSingle/:id' element={<SingleStudents/>} />
        <Route path='/coursespage' element={<Courses/>}/>
      </Routes>
      </section>
    </div>
  )
}

export default App


