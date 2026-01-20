import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ name, teacher, index,id }) => {
    const [cardToggle, setCardToggle] = useState(false)
    return (
        <div className={`course-card`} style={{zIndex:cardToggle?"10":""}}>
            <div className={`card-cont  ${cardToggle ? "card-open" : ""}`}>
                <h2>
                    {name}
                </h2>
                <h1>
                    {teacher}
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae quos reprehenderit quam voluptate, tenetur facilis nobis esse repudiandae pariatur?
                </p>
                <button className='toggleBtn' onClick={() => setCardToggle(!cardToggle)}>
                    {cardToggle ? <ChevronUp/> : <ChevronDown/>}
                </button>
                <Link to={`/course/${id}`}>
                    Batafsil
                </Link>
            </div>
        </div>
    )
}

export default CourseCard