
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({achievements,GroupPhotos,WorkExperience,students,AboutTeacher}) => {

    let{ courses } = useGlobalContext()

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
                    <div className='full-info'>
                        {/* <h2>
                            {courses}
                        </h2> */}
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
                        <button className='dataToggle'> Batafsil</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default StudentCard
