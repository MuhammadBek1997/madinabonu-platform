import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'


const CoursesCard = ({ name, subject, img, courses,achievements, GroupPhotos, WorkExperience, students, AboutTeacher,id }) => {

    let{ setsToggle,sToggle } = useGlobalContext()

    const [cardToggle, setCardToggle] = useState(false)

    return (
        <div>
            
            <div className="card">
                <div className='face front'>
                    <img className='pictures' src={img} alt={name} />
                   <div className="teacher-info">
                    <h1>
                        {name}
                    </h1>
                    <h1>
                        {subject}
                    </h1>
                    </div>
                </div>
                <div className='face back'>
                    <div className='full-info'>
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
                  <Link to={`/teachersSingle/${id}`}><button className='dataToggle'>Batafsil</button> </Link>
                 
                    </div>
                    
                </div>
            </div>
         </div>

    )
}

export default CoursesCard


 