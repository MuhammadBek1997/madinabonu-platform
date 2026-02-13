
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({ achievements, GroupPhotos, WorkExperience, students, AboutTeacher, img, name }) => {

    let { courses } = useGlobalContext()

    const [cardButton, setCardButton] = useState(false)

    return (
    <tr className='laptop'>

        <td>  <img src={img} alt="" className='avatars' /> </td>
        <td className='student-name'>
            <div class="student-info">
                Sophia Wilson <div className="vertical1"> <MoreVertical/> </div> 
            </div>
        </td>
        <td>  <div className="name-more"> 522bcs009  <div className="vertical2"> <MoreVertical/> </div> </div>    </td>
        <td className='teacherName'>{name}   </td>
        <td> <button className='student-single'>Batafsil</button></td>
        
      

    </tr>
    
    
    )
}

export default StudentCard
