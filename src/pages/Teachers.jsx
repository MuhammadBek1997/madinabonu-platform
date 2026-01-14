import React, { useState } from 'react'
import '../styles/Teachers.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CoursesCard from '../components/CoursesCard'

const Teachers = ({ courses }) => {
  
 
    return(
        <section className='course-list'>
            {
                courses.map((item, index) => {
                    return <CoursesCard key={index} {...item} />
                })
            }
        </section>
            )


    
}

export default Teachers
