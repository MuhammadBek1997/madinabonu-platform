import { useState } from 'react'
import '../styles/Students.css'
import StudentCard from '../components/StudentCard'
import { useGlobalContext } from '../Context'

const TopStudents = () => {

  let { courses, setsToggle, sToggle } = useGlobalContext()

  return (
    <section className='course-list'>
      {
        courses.map((item, index) => {
          return <StudentCard key={index} {...item} />
        })
      }
    </section>

  )
}

export default TopStudents
