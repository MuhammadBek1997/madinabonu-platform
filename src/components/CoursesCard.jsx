import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'


const CoursesCard = ({ name, subject, img, courses, achievements, GroupPhotos, WorkExperience, students, AboutTeacher }) => {

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
                    <button className='dataToggle'> Batafsil</button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default CoursesCard


 // <div className={'course-card'} style={{zIndex:cardToggle?"10" : ""}}>
        //     <div className={`course-card-cont ${cardToggle ? "card-open" : ""}`} >
        //         <img className='pictures' src={img} alt={name} />
        //         <div className="title-and-btn">
        //             <div className="words">
        //                 <h1>
        //                     {subject}
        //                 </h1>
        //                 <h1>
        //                     {name}
        //                 </h1>
        //             </div>
        //             <button className='cardBtn' onClick={() => setCardToggle(!cardToggle)}>
        //                 {!cardToggle ? <ChevronDown /> : <ChevronUp />}
        //             </button>
        //             <div className="data">
        //             <h2>
        //              {courses}
        //             </h2>

        //             </div>
        //             <div className="data">
        //             <h2>
        //                 {achievements}
        //             </h2>
        //             </div>
        //             <div className="data">
        //             <h2>
        //                 {GroupPhotos}
        //             </h2>
        //             </div>
        //             <div className="data">
        //             <h2>
        //                 {WorkExperience}
        //             </h2>

        //             </div>
        //             <div className="data">
        //             <h2>
        //                 {students}
        //             </h2>

        //             </div>
        //            <div className="data">
        //             <h4 >
        //                 {AboutTeacher}
        //             </h4>

        //             </div>
        //             <button className='dataToggle'> Batafsil</button>
        //         </div>

        //     </div>
        // </div>