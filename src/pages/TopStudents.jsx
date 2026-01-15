import React from 'react'
import '../styles/Students.css'
import StudentCard from '../components/StudentCard'

const TopStudents = ({courses}) => {
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
