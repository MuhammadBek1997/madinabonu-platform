import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Teachers from './pages/Teachers'
import TopStudents from './pages/TopStudents'

function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
  const [sToggle, setsToggle] = useState('')


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })


  // darkmode button bosilganda chiqadigan pastgi menyu uchun yozilgan
  const [openTheme,setOpenTheme] = useState(false)
  const handleChangeTheme = (T) =>{
    setTheme(T)
    setOpenTheme(false)
  }
  // tugadi


  const saveInfo = () => {
    setUser({ name: name, surname: surname })
  }
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("theme", theme)
  }, [theme,user])

  let courses = [
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      WorkExperience:"100yil",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    },
    {
      img:"/images/rasm.png",
      name: "Teacher Name",
      subject:"Subject Name",
      courses:"Course Duration (12soat)",
      achievements:"Not yet",    
      GroupPhotos:"Not yet",
      WorkExperience:"100yil",
      students:"Fitfilyonta",
      AboutTeacher:"Dedicated educator committed to student success. Helped [Number] students achieve their goals through innovative teaching methods."
    }
    
  
  ];


  


  document.getElementById("root").parentElement.setAttribute("data-theme",theme)

  return (
    <div id={theme} className='body'>
      <Sidebar setsToggle={setsToggle} sToggle={sToggle}/>
      <section className={sToggle ? "section-open" : ""} >

      <Navbar theme={theme} openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} setsToggle={setsToggle} sToggle={sToggle} />
      <Routes>
        <Route path='/' element={<Home openTheme={openTheme} setOpenTheme={setOpenTheme} handleChangeTheme={handleChangeTheme} user={user} name={name} surname={surname} setName={setName} setSurname={setSurname} setTheme={setTheme} theme={theme} saveInfo={saveInfo} />} />
        <Route path='/teachers' element={<Teachers   courses={courses} />} />
        <Route path='/topStudents' element={<TopStudents />} />
      </Routes>
      </section>
    </div>
  )
}

export default App
