
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const StudentCard = ({ courses, achievements, GroupPhotos, WorkExperience, students, AboutTeacher }) => {
    const [cardButton, setCardButton] = useState(false)

    return (
        <div>
          
                    <div className="card">
                        <div className='face front'>
                            <h2>
                                Front
                            </h2>
                        </div>
                        <div className='face back'>
                            <h2>
                                {courses}
                            </h2>
                            <h2>
                                {achievements}
                            </h2>
                            <h2>
                                {GroupPhotos}
                            </h2>
                            <h2>
                                {WorkExperience}
                            </h2>
                            <h2>
                                {students}
                            </h2>
                            <h4 >
                                {AboutTeacher}
                            </h4>
                        </div>
                    </div>
                   
        </div>
    )
}

export default StudentCard
