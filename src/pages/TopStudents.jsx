import React from 'react'
import '../styles/Students.css'

const TopStudents = () => {
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
