import React, { useState } from 'react'
import '../styles/Teachers.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CoursesCard from '../components/CoursesCard'

const Teachers = ({ courses }) => {
    const [cardToggle, setCardToggle] = useState(false)
    return (

        <section className='course-list'>
            {
                courses.map((item, index) => {
                    return (
                       <CoursesCard index={index} {...item} />
                    )
                })
            }
        </section>


    )
}

export default Teachers
