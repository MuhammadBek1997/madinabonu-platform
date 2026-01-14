import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const CourseCard = ({ name, teacher, index }) => {
    const [cardToggle, setCardToggle] = useState(false)
    return (
        <div className={`course-card`} style={{zIndex:cardToggle?"10":""}} key={index}>
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
                <button onClick={() => setCardToggle(!cardToggle)}>
                    {cardToggle ? <ChevronUp/> : <ChevronDown/>}
                </button>
            </div>
        </div>
    )
}

export default CourseCard