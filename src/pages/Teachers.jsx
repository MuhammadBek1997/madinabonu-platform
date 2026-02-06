import React, { useState } from 'react'
import '../styles/Teachers.css'
import '../styles/SinglePage.css'
// import '../styles/ForCards.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CoursesCard from '../components/CoursesCard'
import { useGlobalContext } from '../Context'
import TeachersCard from '../components/TeachersCard'

const Teachers = () => {
  let { courses, setsToggle,sToggle } = useGlobalContext()
 
    return(
        <div className='course-list'>
            {
                courses.map((item, index) => {
                    return <TeachersCard key={index} {...item} />
                    
                })
            }
        </div>
            )


    
}

export default Teachers
