import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'


const CoursesCard = ({ name,subject,img }) => {

    const [cardToggle, setCardToggle] = useState(false)

  return (
    <div className='course-card' >
    <div className={`course-card-cont ${cardToggle ? "card-open" : ""}`} >
        <img className='pictures' src={img} alt={name} />
        <div className="title-and-btn">
            <div className="words">
                <h2>
                    {subject}
                </h2>
                <h1>
                    {name}
                </h1>
            </div>
            <button className='cardBtn' onClick={() => setCardToggle(!cardToggle)}>

                {!cardToggle ? <ChevronDown /> : <ChevronUp />}
            </button>
        </div>
       
    </div>
</div>
  )
}

export default CoursesCard
