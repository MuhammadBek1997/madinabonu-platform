
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'

const StudentCard = ({ achievements, GroupPhotos, WorkExperience, students, AboutTeacher, img, name }) => {

    let { courses } = useGlobalContext()

    const [cardButton, setCardButton] = useState(false)

    return (<tr>
 
        <td>  <img src={img} alt="" className='avatars' /> </td>
        <td>
            <div class="student-info">
                Sophia Wilson
            </div>
        </td>
        <td>522bcs009</td>
        <td>{name}</td>
        <td> <button className='student-single'>Batafsil</button></td>







        {/* </div> */}


        {/* </div> */}
    </tr>
    )
}

export default StudentCard
