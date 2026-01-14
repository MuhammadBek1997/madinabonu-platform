import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'


const CoursesCard = ({ name, subject, img, courses,achievements,GroupPhotos,WorkExperience,students}) => {

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
                    <h3>
                        {courses}
                    </h3>
                    <h3>
                        {achievements}
                    </h3>
                    <h3>
                        {GroupPhotos}
                    </h3>
                    <h3>
                        {WorkExperience}
                    </h3>
                    <h3>
                        {students}
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default CoursesCard
