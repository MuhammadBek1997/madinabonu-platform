import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Teachers from './pages/Teachers'
import TopStudents from './pages/TopStudents'
import SingleTeachers from './components/SingleTeachers'
import { useGlobalContext } from './Context'

function App() {
  let {theme,login,sToggle} = useGlobalContext()


  


  document.getElementById("root").parentElement.setAttribute("data-theme",theme)

  return (
    <div id={theme} className='body'>
      <Sidebar />
      <section className={sToggle ? "section-open" : ""} >

      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/teachers' element={<Teachers/>} />
        <Route path='/topStudents' element={<TopStudents/>} />
        <Route path='/teachersSingle/:id' element={<SingleTeachers/>} />
      </Routes>
      </section>
    </div>
  )
}

export default App



// home qismi ichi
// openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} user={user} name={name}
//  surname={surname} setName={setName} setSurname={setSurname} setTheme={setTheme} theme={theme} saveInfo={saveInfo}


// teachers qismi ichi
// courses={courses} setsToggle={setsToggle} sToggle={sToggle} 


// top students ichi
// courses={courses}  


// navbarni ichi
// theme={theme} openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} setsToggle={setsToggle}
//  sToggle={sToggle}



// saidbar ichi
// setsToggle={setsToggle} sToggle={sToggle} theme={theme}